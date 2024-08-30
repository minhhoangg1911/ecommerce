import React from 'react'
import { useParams } from 'react-router-dom'
import OrderSummary from '../OrderSummary/OrderSummary';
import { useGetOrderDetalsQuery } from '../../../Apis/orderApi';
import { useGetShipperQuery } from '../../../Apis/shipperApi';

const OrderDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderDetalsQuery(id);
  const { data: shipper } = useGetShipperQuery(null);
  
  let userInput, orderDetails;
  if (!isLoading && data?.result) {
    userInput = {
      name: data.result[0].pickupName,
      email: data.result[0].pickupEmail,
      phoneNumber: data.result[0].pickupPhoneNumber,
    }
    orderDetails = {
      id: data.result[0].orderHeaderId,
      cartItems: {
        $id: data.result[0].id,
        $values: data.result[0].orderDetails.$values,
      },
      cartTotal: data.result[0].orderTotal,
      status: data.result[0].status,
    }
  }
  return (
    <div className='container my-5 mx-auto p-5 w-100' style={{ maxWidth: "750" }}>
      {!isLoading && orderDetails && userInput && (
        <OrderSummary data={orderDetails} shipper={shipper} userInput={userInput} />
      )}
    </div>
  )
}

export default OrderDetails