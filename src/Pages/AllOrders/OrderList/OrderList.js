import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getStatusColor from '../../../Helper/getStatusColor';
import MainLoader from '../../../Components/common/MainLoader';
import { useSelector } from 'react-redux';
import { SD_Roles } from '../../../Utility/SD';

const OrderList = ({ isLoading, orderData }) => {
    const [orderDataTemp, setOrderDataTemp] = useState([]);
    const userData = useSelector((state) => state.userAuthStore);
   

    useEffect(() => {
        setOrderDataTemp(orderData)
    }, [orderData])


   
    const navigate = useNavigate();
    return (
        <>
            {isLoading && <MainLoader />}
            {!isLoading && (
                <div className='table p-5'>
                    <div className='p-2'>
                        <div className='row border'>
                            <div className='col-1'>ID</div>
                            <div className='col-2'>Name</div>
                            <div className='col-2'>Phone</div>
                            <div className='col-1'>Total</div>
                            <div className='col-1'>Items</div>
                            <div className='col-1'>Date</div>
                            <div className='col-1'>Shipper</div>
                            <div className='col-2'>Status</div>
                            <div className='col-1'></div>
                        </div>
                        {orderDataTemp?.map((orderItem, index) => {
                            const badgeColor = getStatusColor(orderItem.status);
                            return (
                                <div className='row border' key={index}>
                                    <div className='col-1'>{orderItem.orderHeaderId}</div>
                                    <div className='col-2'>{orderItem.pickupName}</div>
                                    <div className='col-2'>{orderItem.pickupPhoneNumber}</div>
                                    <div className='col-1'>${orderItem.orderTotal.toFixed(2)}</div>
                                    <div className='col-1'>{orderItem.totalItems}</div>
                                    <div className='col-1'>{new Date(orderItem.orderDate).toLocaleDateString()}</div>
                                    <div className='col-1'>
                                        {orderItem.orderHeaderId ? <div>{orderItem.shipper?.name}</div> : <div> Chua co Shipper</div>}
                                    </div>

                                    <div className="col-1">
                                        <span className={`badge bg-${badgeColor}`}>{orderItem.status}</span>
                                    </div>
                                    <div className='col-2'>
                                        {userData.role === SD_Roles.ADMIN ?
                                            <>
                                              
                                                <button className='btn btn-success mx-2'
                                                    onClick={() => navigate("/order/orderDetails/" + orderItem.orderHeaderId)}
                                                >Details</button>
                                            </>
                                            : <button className='btn btn-success mx-2'
                                                onClick={() => navigate("/order/orderDetails/" + orderItem.orderHeaderId)}
                                            >Details</button>
                                        }

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderList