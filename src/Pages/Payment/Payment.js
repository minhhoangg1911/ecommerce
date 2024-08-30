import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom'
import PaymentForm from './PaymentForm/PaymentForm';
import OrderSummary from '../AllOrders/OrderSummary/OrderSummary';

const Payment = () => {
    const {
        state: { apiResult, userInput }
    } = useLocation();
    const stripePromise = loadStripe("pk_test_51PgVjtEIEihN5bYygVXmwOtWYdhNbSIElgNmnfM46Vd7DXDBbV4Zgvw3fPOja2wZnZbKO2WMr59yH6NDaAE9Uhqj00rU4p8P0J");

    const options = {
        // passing the client secret obtained from the server
        clientSecret: apiResult.clientSecret,
    };
    return (
        <Elements stripe={stripePromise} options={options}>
            <div className='container m-5 p-5'>
                <div className='row'>
                    <div className='col-md-7'>
                        <OrderSummary data={apiResult} userInput={userInput} />
                    </div>
                    <div className='col-md-4 offset-md-1'>
                        <h3 className='text-success'>Payment</h3>
                        <div className='mt-5'>
                            <PaymentForm data={apiResult} userInput={userInput} />
                        </div>
                    </div>
                </div>
            </div>
        </Elements>
    )
}

export default Payment