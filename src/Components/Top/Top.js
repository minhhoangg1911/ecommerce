import React from 'react'
import './style.css'
const Top = () => {
    return (
        <div className='_top '>
            <div className='_img'>
                <div className='_item d-flex flex-row p-3 mx-2 w-100'>
                    <div className='mx-5 text-white Segoe UI'>
                        <h1 className='fw-bold font-monospace'>150</h1>
                        <p className='fw-bold' style={{ fontSize: '10px' }}>Max Order</p>
                    </div>
                    <div className='mx-5 text-white'>
                        <h1 className='fw-bold font-monospace'>24</h1>
                        <p className='fw-bold' style={{ fontSize: '10px' }}>Hours</p>
                    </div>
                    <div className='mx-5 text-white'>
                        <h1 className='fw-bold font-monospace' >15</h1>
                        <p className='fw-bold' style={{ fontSize: '10px' }}> Chefs</p>
                    </div>
                    <div className='mx-5 text-white'>
                        <h1 className='fw-bold font-monospace'>95</h1>
                        <p className='fw-bold' style={{ fontSize: '10px' }}>Delivery</p>
                    </div>
                    <div className='mx-5 text-white'>
                        <h1 className='fw-bold font-monospace'>55</h1>
                        <p className='fw-bold' style={{ fontSize: '10px' }}>Coupons</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Top