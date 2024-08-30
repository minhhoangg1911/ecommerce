import React from 'react'
import { Flex, Progress } from 'antd';
const Product = ({ orderProduct }) => {
    console.log("orderProduct", orderProduct)
    return (
        <div>
            <div className='mt-4 mb-4'>

                <div className='d-flex row mt-4 mb-4 container'>
                    <div className='card p-1 col-sm-4 col-12 border-0' style={{
                        boxShadow: '0px 3px 14px rgba(226, 225, 225, 0.75)'
                    }}>
                        <div className='p-3' style={{overflow:'hidden'}}>
                            <Flex gap="small" vertical >
                                <div className='fs-4 fw-bold'>Top Sales by Product:</div>
                                <div className='d-flex justify-content-between mt-2'>
                                    <div className='fs-6 fw-bold'>Electronics</div>
                                    <div className=' fs-6 fw-bold'>30$</div>
                                </div>
                                <Progress
                                    percent={30}
                                    percentPosition={{
                                        align: 'center',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                    strokeColor="#001342"
                                />
                                <div className='d-flex justify-content-between mt-2'>
                                    <div className='fs-6 fw-bold'>Fashion</div>
                                    <div className=' fs-6 fw-bold'>30$</div>
                                </div>
                                <Progress
                                    percent={30}
                                    percentPosition={{
                                        align: 'center',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                />
                                <div className='d-flex justify-content-between mt-2'>
                                    <div className='fs-6 fw-bold'>Food & Drinks</div>
                                    <div className=' fs-6 fw-bold'>30$</div>
                                </div>
                                <Progress
                                    percent={70}
                                    percentPosition={{
                                        align: 'center',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                />
                                <div className='d-flex justify-content-between mt-2'>
                                    <div className='fs-6 fw-bold'>Services</div>
                                    <div className=' fs-6 fw-bold'>30$</div>
                                </div>
                                <Progress
                                    percent={100}
                                    percentPosition={{
                                        align: 'center',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                />
                            </Flex>
                        </div>
                    </div>
                    <div className='d-sm-flex gap-5 col-8'>
                        {orderProduct && orderProduct.$values.map((item, index) => {
                            return (
                                <div key={index} className="card col-sm-2 col-12 p-3 mt-2  border-0" style={{
                                    boxShadow: '0px 3px 14px rgba(226, 225, 225, 0.75)'

                                }}>
                                    <div className="d-flex justify-content-between card-item">
                                        <div>
                                            <img src={item.foodImg} alt='' width='100%' className='rounded-1' style={{ border: '1px solid green', padding: '20px' }} />
                                        </div>
                                    </div>
                                    <div className='d-flex w-100 gap-2'>

                                        <div className='mt-4'>
                                            <p style={{ color: '#6e757f' }}>{item.foodName}</p>
                                            <div>
                                                <p className='fs-6 fw-bold'>${(item.foodPrice) * (item.detailQuantity)}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product