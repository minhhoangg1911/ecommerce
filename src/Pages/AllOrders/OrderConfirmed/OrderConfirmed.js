import { useParams } from 'react-router-dom'
import React from 'react'


const OrderConfirmed = () => {
    const { id } = useParams();
    return (
        <div className='w-100 text-center d-flex justify-content-center align-items-center'>
            <div>
                <i
                    style={{
                        fontSize: "7rem",
                    }}
                    className='bi bi-check2-circle text-success'
                ></i>
                <div className='pb-5'>
                    <h2 className='text-success'>Order has been Confirmed!</h2>
                    <h5 className='mt-3'>Your order Id: {id}</h5>
                    <p>We will soon start to cook the delicous food you ordered</p>
                    <img src='https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_640.jpg' alt='' style={{ width: "40%", borderRadius: "30px" }} />
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmed