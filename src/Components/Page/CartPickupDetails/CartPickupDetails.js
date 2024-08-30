import React, { useState, useEffect } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MiniLoader from '../../common/MiniLoader'
import inputHelper from '../../../Helper/inputHelper'
import { useInitiatePaymentMutation } from '../../../Apis/paymentApi'

const CartPickUpDetails = () => {
    const [loading, setLoading] = useState(false);
    const shoppingCartFromStore = useSelector(
        (state) => state.shoppingCartStore.cartItems ?? []
    );
    const userData = useSelector((state) => state.userAuthStore);
    let grandTotal = 0;
    let totalItems = 0;

    const initialUserData = {
        name: userData.fullName,
        email: userData.email,
        phoneNumber: "",
    }

    shoppingCartFromStore.map((cartItem) => {
        totalItems += cartItem.quantity ?? 0;
        grandTotal += (cartItem.food?.price ?? 0) * (cartItem.quantity ?? 0);
        return null;
    })

    const navigate = useNavigate();
    const [userInput, setUserInput] = useState(initialUserData);
    const [initiatePayment] = useInitiatePaymentMutation();

    const handleUserInput = (e) => {
        const temData = inputHelper(e, userInput);
        setUserInput(temData);
    }
    useEffect(() => {
        setUserInput({
            name: userData.fullName,
            email: userData.email,
            phoneNumber: "",
        })
    }, [userData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { data } = await initiatePayment(userData.id);
        //payment.tst
      
        navigate("/payment", {
            state: { apiResult: data?.result, userInput },
        })
    }

    return (
        <div className='border pb-5 pt-3'>
            <h1 className='text-center text-success' style={{ fontWeight: "300" }}>Pickup Detail</h1>
            <hr />
            <form onSubmit={handleSubmit} className='col-10 mx-auto'>
                <div className='form-group mt-3'>Pickup Name
                    <input
                        value={userInput.name}
                        type="text"
                        className='form-control'
                        placeholder='name'
                        name="name"
                        onChange={handleUserInput}
                        required
                    />
                </div>
                <div className='form-group mt-3'>
                    Pickup Email
                    <input
                        value={userInput.email}
                        type='email'
                        className='form-control'
                        placeholder='email...'
                        name="email"
                        onChange={handleUserInput}
                        required
                    />
                </div>
                <div className='form-group mt-3'>
                    Pickup Phone Number
                    <input
                        value={userInput.phoneNumber}
                        type="number"
                        className='form-control'
                        placeholder='phone number...'
                        name="phoneNumber"
                        onChange={handleUserInput}
                        required
                    />
                </div>
                <div className='form-group mt-3'>
                    <div className='card p-3' style={{ background: "ghostwhite" }}>
                        <h5>Gran Total : ${grandTotal.toFixed(2)}</h5>
                        <h5>No of items : {totalItems}</h5>
                    </div>
                </div>
                <button
                    type="submit"
                    className='btn btn-lg btn-success form-control mt-3'
                    disabled={loading}
                    style={{background:'#3e693e'}}
                >
                    {loading ? <MiniLoader /> : "Looks Good? Place Order!"}
                </button>
            </form>
        </div>
    )
}

export default CartPickUpDetails