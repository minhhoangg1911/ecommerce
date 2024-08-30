import React from 'react'
import { useDeleteShipperMutation, useGetShipperQuery } from '../../../Apis/shipperApi'
import {toast} from 'react-toastify'
const ListShipper = () => {
    const {data} = useGetShipperQuery(null);
    const [deleteShipper] = useDeleteShipperMutation();
    const handleUserDelete = async (id) => {

        toast.promise(
            deleteShipper(id),
            {
                pending: 'Processing your request...',
                success: 'Menu Item Deleted Successfully 👌',
                error: 'Error encoutnered 🤯'
            },
            {
                theme: "dark",
            }
        )
    }

    
  return (
    <div className='p-2'>
    <div className='row border'>
        <div className='col-2'>Image</div>
        <div className='col-2'>ID</div>
        <div className='col-2'>Name</div>
        <div className='col-2'>Email</div>
        <div className='col-2'>Phone</div>
        <div className='col-2'>Action</div>
    </div>
    {data?.result.$values.map((item, index) => {
        return (
            <div className='row border' key={index} >
                <div className='col-2 mt-2'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU' alt=''
                        style={{ width: "100%", maxWidth: "120px" }}
                    />
                </div>
                <div className='col-2 mt-2'>{item.id}</div>
                <div className='col-2 mt-2'>{item.name}</div>
                <div className='col-2 mt-2'></div>
                <div className='col-2 mt-2'>{item.phone}</div>

                <div className='col-2 mt-2' >

                    <button className='btn btn-danger mx-2'
                        onClick={() => handleUserDelete(item.id)}
                    >
                        <i className='bi bi-trash-fill'></i>
                    </button>
                </div>
            </div>
        )
    })}
</div>
  )
}

export default ListShipper