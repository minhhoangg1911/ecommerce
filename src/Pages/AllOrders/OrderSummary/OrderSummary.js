import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SD_Roles, SD_Status } from '../../../Utility/SD'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useUpdateOrderHeaderMutation, useUpdateShipperOrderHeaderMutation } from '../../../Apis/orderApi'
import MainLoader from '../../../Components/common/MainLoader'
import getStatusColor from '../../../Helper/getStatusColor'
const OrderSummary = ({ data, userInput, shipper }) => {
  const navigate = useNavigate();
  const badgeTypeColor = getStatusColor(data.status);
  const userData = useSelector((state) => state.userAuthStore);
  const [loading, setIsLoading] = useState(false);
  const [updateOrderHeader] = useUpdateOrderHeaderMutation();
  const [updateShipperOrderHeader] = useUpdateShipperOrderHeaderMutation();
  const [selectedValue, setSelectedValue] = useState('');

  const nextStatus =
    data.status === SD_Status.CONFIRMED
      ? { color: "info", value: SD_Status.BEING_COOKED }
      : data.status === SD_Status.BEING_COOKED
        ? { color: "warning", value: SD_Status.READY_FOR_PICKUP }
        : data.status === SD_Status.READY_FOR_PICKUP && {
          color: "success",
          value: SD_Status.COMPLETED
        }

  const handleNextStatus = async () => {
    setIsLoading(true);

    if(nextStatus.value === 'Completed') {
      await updateShipperOrderHeader({
        orderHeaderId: data.id,
        status: nextStatus.value,
        ShipperId: selectedValue
      })
    }

    await updateOrderHeader({
      orderHeaderId: data.id,
      status: nextStatus.value,
    })

    setIsLoading(false)
  }

  const handleCancel = async () => {
    setIsLoading(true)

    await updateOrderHeader({
      orderHeaderId: data.id,
      status: SD_Status.CANCELLED,

    })

    setIsLoading(false)
  }
  console.log(selectedValue)
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <div>
      {loading && <MainLoader />}
      {!loading &&
        (
          <>
            <div className='d-flex justify-content-between align-aitems-center'>
              <h3 className='text-success'>
                Order Summary
              </h3>
              <div className='d-flex gap-2'>
                {nextStatus.value === 'Completed' ? <select className='btn btn-warning' onChange={handleSelectChange} >
                  {shipper?.result.$values.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>{item.name}</option>
                    )
                  })}
                </select> : ""}

                <span className={`btn btn-outline-${badgeTypeColor} fs-6`}>
                  {data.status}
                </span>
              </div>
            </div>
            <div className='mt-3'>
              <div className='border py-3 px-2'>Name : {userInput?.name} </div>
              <div className='border py-3 px-2'>Email : {userInput?.email} </div>
              <div className='border py-3 px-2'>Phone : {userInput?.phoneNumber} </div>
            </div>
            <div className='border py-3 px-2'>
              <h4 className='text-success'>Menu Items</h4>
              <div className='p-3'>
                {data.cartItems.$values?.map((cartItem, index) => {
                  return (
                    <div className='d-flex' key={index}>
                      <div className='d-flex w-100 justify-content-between'>
                        <p>{cartItem.food?.name}</p>
                        <p>$ {cartItem.food?.price} x {cartItem.quantity} =</p>
                      </div>
                      <p style={{ width: "70px", textAlign: "right" }}>${(cartItem.food?.price ?? 0) * (cartItem.quantity ?? 0)}</p>
                    </div>
                  )
                })}
                <hr />
                <h4 className='text-danger' style={{ textAlign: 'right' }}>
                  ${data.cartTotal?.toFixed(2)}
                </h4>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
              <button className='btn btn-secondary' onClick={() => navigate(-1)}>
                Back to Orders
              </button>
              {userData.role === SD_Roles.ADMIN && (
                <div>
                  {data.status !== SD_Status.CANCELLED &&
                    data.status !== SD_Status.COMPLETED && (
                      <button className='btn btn-danger mx-2'
                        onClick={handleCancel} >Cancel</button>
                    )
                  }

                  <button className={`btn btn-${nextStatus?.color}`} onClick={handleNextStatus}>{nextStatus.value}</button>
                </div>
              )}
            </div>
          </>
        )
      }

    </div>
  )
}

export default OrderSummary