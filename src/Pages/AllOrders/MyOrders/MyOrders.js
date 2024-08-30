import React from 'react'
import OrderList from '../OrderList/OrderList'
import MainLoader from '../../../Components/common/MainLoader'
import withAuth from '../../../HOC/withAuth'
import { useSelector } from 'react-redux'
import { useGetAllOrderQuery } from '../../../Apis/orderApi'

const MyOrder = () => {
    const userId = useSelector((state) => state.userAuthStore.id);
    const { data, isLoading } = useGetAllOrderQuery({userId});
    return (
        <>
            {isLoading && <MainLoader />}

            {!isLoading && (
                <>
                    <div className='d-flex align-items-center justify-content-between mx-5 mt-5'>
                        <h1 className='text-success'>My Orders</h1>
                    </div>
                    <OrderList isLoading={isLoading} orderData={data?.apiResonse?.result} />
                </>
            )}
        </>
    )
}

export default withAuth(MyOrder)