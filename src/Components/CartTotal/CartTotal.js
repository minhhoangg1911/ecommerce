import React from 'react'
import './style.css'
const CartTotal = () => {
    return (
        <div className='container _cart-total'>
            <div style={{ padding: '0 60px' }}>
                <h1 className='fw-bold mb-5' >CartTotal</h1>
            </div>
            <div style={{ padding: '0 60px' }}>
                <div className='row d-flex' >
                    <h3 className='col-2 fw-bold'>Subtotal</h3>
                    <p className='col-10'>71.96$</p>
                </div>
                <hr />
                <div className='row d-flex align-items-center flex-column flex-sm-row'>
                    <h3 className='col-2 fw-bold'>Shipping</h3>
                    <div className='col-10'>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Flat rate
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Free shipping
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" />
                            <label className="form-check-label" htmlFor="defaultCheck3">
                                Local pickup
                                Shipping to <b> CA. </b>
                                Change address
                            </label>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='row d-flex flex-column flex-sm-row' >
                    <h3 className='col-2 fw-bold'>Total</h3>
                    <p className='col-10'>71.96$</p>
                </div>
                <div >
                    <hr />
                </div>
                <button className='button-checkout'>proceed to checkout</button>
            </div>
        </div>
    )
}

export default CartTotal