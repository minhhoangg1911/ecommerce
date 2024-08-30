import React from 'react'
import { useDeleteFoodMutation, useGetFoodQuery } from '../../../Apis/foodApi';
import { toast } from 'react-toastify'
import MainLoader from '../../../Components/common/MainLoader';

const ListFood = ({ onAddNewFood }) => {
    const [deleteFood] = useDeleteFoodMutation();
    const { data, isLoading } = useGetFoodQuery(null);

    const handleFoodDelete = async (id) => {

        toast.promise(
            deleteFood(id),
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
        <>
            {isLoading && <MainLoader />}
            {!isLoading &&
                (
                    <div className='table p-5'>
                        <div className="d-flex align-item-center justify-content-between">
                            <h1 className="text-success">MenuItem List</h1>
                            <button className="btn btn-success"
                                onClick={onAddNewFood}
                            >Add New Food</button>
                        </div>

                        <div className='p-2'>
                            <div className='row border'>
                                <div className='col-2'>Image</div>
                                <div className='col-1'>ID</div>
                                <div className='col-2'>Name</div>
                                <div className='col-2'>Category</div>
                                <div className='col-1'>Price</div>
                                <div className='col-2'>Special Tag</div>
                                <div className='col-1'>Action</div>
                            </div>
                            {data?.result.$values.map((food, index) => {
                                return (

                                    <div className='row border' key={index}>
                                        <div className='col-2'>
                                            <img src={food.image} alt = ''
                                                style={{ width: "100%", maxWidth: "120px" }}
                                            />
                                        </div>
                                        <div className='col-1'>{food.id}</div>
                                        <div className='col-2'>{food.name}</div>
                                        <div className='col-2'>{food.category}</div>
                                        <div className='col-1'>{food.price}</div>
                                        <div className='col-2'>{food.specialTag}</div>
                                        <div className='col-1' >

                                            <button className='btn btn-danger mx-2'
                                                onClick={() => handleFoodDelete(food.id)}
                                            >
                                                <i className='bi bi-trash-fill'></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default ListFood