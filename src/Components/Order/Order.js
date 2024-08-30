import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateShoppingCartMutation } from '../../Apis/shoppingCartApi';
import { removeFromCart, updateQuantity } from '../../Storage/Redux/shoppingCartSlice';
import withAuth from '../../HOC/withAuth';
import CartPickUpDetails from '../Page/CartPickupDetails/CartPickupDetails';
const Order = () => {
    const dispatch = useDispatch();
    const [updateShoppingCart] = useUpdateShoppingCartMutation();
    const shoppingCartFromStore = useSelector(
        (state) => state.shoppingCartStore.cartItems ?? []
    )
    const userData = useSelector((state) => state.userAuthStore);
    if (!shoppingCartFromStore) {
        return <div>Shopping Cart Empty</div>
    }

    const handleQuantity = (updateQuantityBy, cartItem) => {
        if ((updateQuantityBy === -1 && cartItem.quantity === 1) || updateQuantityBy === 0) {
            // remove the item
            updateShoppingCart({
                foodId: cartItem.food.id,
                updateQuantityBy: 0,
                userId: userData.id
            });
            dispatch(removeFromCart({ cartItem, quantity: 0 }))

        } else {
            // update the quantity with the new quantity
            updateShoppingCart({
                foodId: cartItem.food.id,
                updateQuantityBy: updateQuantityBy,
                userId: userData.id
            });
            dispatch(updateQuantity({
                cartItem,
                quantity: cartItem.quantity + updateQuantityBy
            }));
        }
    }

    return (
        <div className='order container'>
            <div className='p-5'>
                <div className='p-2'>

                    <div className='row border d-flex flex-row '>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex flex-row gap-3 justify-content-around '>
                                <div className='item  fw-bold'>Product</div>
                                <div className='items fw-bold'>Price</div>
                                <div className='item  fw-bold'>Quantity</div>
                                <div className='item  fw-bold'>Subtotal</div>
                            </div>
                            {shoppingCartFromStore.map((cartItem, index) => {
                                return (
                                    <div className='row border mb-2 d-flex justify-content-around mt-2' key={index} >
                                        <div className='col-3 d-flex align-items-center justify-content-around'>
                                            <div className='mt-2' style={{ cursor: 'pointer', fontSize: '20px' }} >
                                                <i className="bi bi-x"
                                                    onClick={() => handleQuantity(0, cartItem)}
                                                ></i>
                                            </div>
                                            <div>
                                                <img src={cartItem.food.image} width={50} className='ms-2' alt='' />
                                            </div>
                                            <div className='ms-2'>{cartItem.food.name}</div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-center col-3 item'>
                                            ${cartItem.food.price}
                                        </div>
                                        <div className='col-3 item'>
                                            <div className='d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow' style={{
                                                width: "100px",
                                                height: "43px",
                                            }}>
                                                <span style={{ color: "rgba(22,22,22,.7)" }} role='button'>
                                                    <i className='bi bi-dash-circle-fill'
                                                        onClick={() => handleQuantity(-1, cartItem)}
                                                    ></i>
                                                </span>
                                                <span>
                                                    <b>{cartItem.quantity}</b>
                                                </span>
                                                <span style={{ color: "rgba(22,22,22,.7)" }} role='button'>
                                                    <i className='bi bi-plus-circle-fill'
                                                        onClick={() => handleQuantity(+1, cartItem)}
                                                    ></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-center col-3 item'>{(cartItem.quantity * cartItem.food.price)}$</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='col-12 col-sm-6'>
                            <CartPickUpDetails />
                        </div>

                    </div>

                    <div className='d-flex justify-content-between flex-column flex-sm-row mt-3' style={{ gap: '10px' }}>
                        <div className='d-flex flex-column flex-sm-row' style={{ gap: '10px' }}>
                            <input style={{ border: '1px solid green', borderRadius: '5px', padding: '15px' }} placeholder='Coupon code' />
                            <button className='button-coupon' style={{ textTransform: 'uppercase' }}>Apply coupon </button>
                        </div>

                        <div className='d-flex flex-column flex-sm-row gap-2'>
                            <button className='button-update' style={{ textTransform: 'uppercase' }}>Update cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default withAuth(Order)