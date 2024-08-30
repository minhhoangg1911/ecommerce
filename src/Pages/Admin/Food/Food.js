import React, { useEffect, useState } from 'react'
import MainLoader from '../../../Components/common/MainLoader'
import { useCreateFoodMutation } from '../../../Apis/foodApi';
import { SD_Categories } from '../../../Utility/SD';
import inputHelper from '../../../Helper/inputHelper';
import { toast } from "react-toastify";

const Categories = [
    SD_Categories.APPETIZER,
    SD_Categories.ENTREE,
    SD_Categories.DESSERT,
    SD_Categories.BEVERAGES,
]

const FoodData = {
    name: "",
    description: "",
    specialTag: "",
    category: Categories[0],
    price: "",
}


const Food = () => {
    const [loading, setLoading] = useState(false);
    const [foodInputs, setFoodInput] = useState(FoodData);
    const [createFood] = useCreateFoodMutation();

    const handleFoodInput = (e) => {
        const temData = inputHelper(e, foodInputs);
        setFoodInput(temData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("Name", foodInputs.name);
        formData.append("Description", foodInputs.description);
        formData.append("SpecialTag", foodInputs.specialTag ?? " ");
        formData.append("Category", foodInputs.category);
        formData.append("Price", foodInputs.price);
        formData.append("Image", "https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat.jpeg");

        let response = await createFood(formData);
        if (response?.data) {
            toast.success("Food Item created successfully", "success")
            setLoading(false);
            console.log("response", response)
        } else {
            toast.error("Food No created", "error")
            setLoading(false);
        }


    }

    return (
        <div className='container border mt-5 p-5 '>
            {loading && <MainLoader />}

            <h3 className=' px-2 text-success'>
                Add Food
            </h3>
            <form method="post" encType='multipart/form-data' onSubmit={handleSubmit} >
                <div className='row mt-3'>
                    <div className='col-md-7'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Enter Name'
                            required
                            name="name"
                            onChange={handleFoodInput}
                        />
                        <textarea
                            className='form-control mt-3'
                            placeholder='Enter Description'
                            name="description"
                            rows={10}
                            onChange={handleFoodInput}
                        >

                        </textarea>
                        <input type="text"
                            className='form-control mt-3'
                            placeholder='Enter Special Tag'
                            name="specialTag"
                            onChange={handleFoodInput}
                        />
                        <select
                            className='form-control mt-3 form-select'
                            name="category"
                            onChange={handleFoodInput}
                        >
                            {Categories.map((category, index) => (
                                <option key={index} value={category} >{category}</option>
                            ))}
                        </select>
                        <input type="number"
                            className='form-control mt-3'
                            placeholder='Enter Price'
                            name="price"
                            onChange={handleFoodInput}
                        />

                        <input type="text" className='form-control mt-3' />

                        <div className='row'>
                            <div className='col-12'>
                                <button
                                    type='submit'
                                    className='btn btn-success form-control mt-3'
                                >
                                    Create
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-5 text-center'>
                        <img
                            src='https://via.placeholder.com/150'
                            style={{ width: "100%", borderRadius: "30px" }}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Food