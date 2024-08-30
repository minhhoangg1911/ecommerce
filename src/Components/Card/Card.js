import React, { useEffect, useState } from 'react'
import './style.css'
import { useGetFoodQuery } from '../../Apis/foodApi';
import { useNavigate } from 'react-router-dom';
import { useUpdateShoppingCartMutation } from '../../Apis/shoppingCartApi';
import { useSelector } from 'react-redux';
import toastNotify from '../../Helper/toastNotify';
const Card = () => {

    const { data } = useGetFoodQuery(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const navigate = useNavigate()
    const [updateShoppingCart] = useUpdateShoppingCartMutation();
    const userData = useSelector((state) => state.userAuthStore);
    const handleAddToCart = async (foodId) => {
        if (!userData.id) {
            navigate("/login");
            return;
        }
        setIsAddingToCart(true);

        const response = await updateShoppingCart({
            foodId: foodId,
            updateQuantityBy: 1,
            userId: userData.id
        });
        if (response.data && response.data.isSuccess) {
            toastNotify("Item added to cart successfully");
        }
        
        setIsAddingToCart(false);
    }


    return (
        <div className='_card container' style={{ marginTop: '20px' }}>
            <div>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4' >
                    {data?.result.$values.map((item, index) => {
                        return (
                            <div className='mt-2' key={index}>
                                <div className='card' style={{ position: "relative", padding: "20px", boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}>
                                    <img src={item.image} style={{ borderRadius: "50%" }} width={100} height={200} className='w-100 mt-5 image-box' alt=''
                                        onClick={() => navigate('/details/' + item.id)}
                                    />

                                    <i className='bi bi-cart-plus btn btn-outline-danger' style={{
                                        position: "absolute",
                                        top: "15px",
                                        right: "15px",
                                        padding: "5px 10px",
                                        borderRadius: "3px",
                                        outline: "none !important",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleAddToCart(item.id)}
                                    ></i>
                                    <i className='bi bi-star btn btn-success'
                                        style={{
                                            position: "absolute",
                                            top: "15px",
                                            left: "15px",
                                            padding: "5px 10px",
                                            borderRadius: "3px",
                                            outline: "none !important",
                                            cursor: "pointer"
                                        }}
                                    >&nbsp;{item.specialTag}</i>
                                    <div className='d-flex flex-column text-center p-3' >
                                        <div className='p-1 fw-bold fs-5'>{item.name}</div>
                                        <div className='p-2'>{item.description}</div>
                                        <div>
                                            <h5>${item.price}</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card