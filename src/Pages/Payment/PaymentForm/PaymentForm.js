import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { SD_Status } from '../../../Utility/SD';
import { useNavigate } from 'react-router-dom';
import toastNotify from '../../../Helper/toastNotify';
import { toast } from 'react-toastify';
import { useCreateOrderMutation } from '../../../Apis/orderApi';


const PaymentForm = ({ data, userInput }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [createOrder] = useCreateOrderMutation();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      redirect: "if_required",
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toast.error("An unexpected error occured", "error");
      setIsProcessing(false);
    } else {

      let grandTotal = 0;
      let totalItems = 0;
      const orderDetailsDTO = [];
      data.cartItems.$values?.forEach((item) => {
        const tempOrderDetails = {};
        tempOrderDetails["menuItemId"] = item.food?.id
        tempOrderDetails["quantity"] = item.quantity
        tempOrderDetails["itemName"] = item.food?.name
        tempOrderDetails["price"] = item.food?.price
        orderDetailsDTO.push(tempOrderDetails);
        grandTotal += (item.quantity * item.food?.price);
        totalItems += item.quantity;
      });

      const response = await createOrder({
        PickupName: userInput.name,
        PickupPhoneNumber: userInput.phoneNumber,
        PickupEmail: userInput.email,
        ApplicationUserId: data.userId,
        OrderTotal: grandTotal,
        StripePaymentIntentId: data.stripePaymentIntentId,
        TotalItems: totalItems,
        OrderDetailsDTO: orderDetailsDTO,
        ShipperId : null,
        Status: result.paymentIntent.status === "succeeded" ? SD_Status.CONFIRMED : SD_Status.PENDING,
      })
      if (response) {
        if (response.data?.result.status === SD_Status.CONFIRMED) {
          navigate(`/order/orderConfirmed/${response.data.result.orderHeaderId}`)
        } else {
          navigate("/failed");
        }
      }
    }
    setIsProcessing(false);
  };

  // "applicationUserId": "string",
  // "stripePaymentIntentId": "string",
  // "status": "string",


  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || isProcessing} className='btn btn-success mt-5 w-100'>
        <span className='button-text'>
          {isProcessing ? "Processing ..." : "Submit Order"}
        </span>
      </button>
    </form>
  );
};

export default PaymentForm;