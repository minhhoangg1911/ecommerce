import React from 'react'
import Order from '../../Components/Order/Order'
import CartTotal from '../../Components/CartTotal/CartTotal'

const Cart = () => {
    return (
        <div className='cart' style={{ background: '#f8f7f2' }}>
            <Order />
            <CartTotal />
        </div>
    )
}

export default Cart