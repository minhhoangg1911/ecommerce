import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFoodByIdQuery } from '../../../Apis/foodApi';
import { SD_Categories } from '../../../Utility/SD';
import toastNotify from '../../../Helper/toastNotify';
import { useUpdateShoppingCartMutation } from '../../../Apis/shoppingCartApi';
import { useSelector } from 'react-redux';

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


const Card = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [imageToStore, setImageToStore] = useState("");
    const [imageToDisplay, setImageToDisplay] = useState("");
    const [foodInputs, setFoodInput] = useState(FoodData);
    const [quantity, setQuantity] = useState(1);
    // const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [updateShoppingCart] = useUpdateShoppingCartMutation();
    const userData = useSelector((state) => state.userAuthStore);

    const { data } = useGetFoodByIdQuery(id);

    useEffect(() => {
        if (data && data.result) {
            const temData = {
                name: data.result.name,
                description: data.result.description,
                specialTag: data.result.specialTag,
                category: data.result.category,
                price: data.result.price,
            }
            setFoodInput(temData)
            setImageToDisplay(data.result.image)
        }
    }, [data])

    
const handleQuantity = (counter) => {
    let newQuantity = quantity + counter;
    if (newQuantity === 0) {
        newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
}

const handleAddToCart = async (id) => {
    if (!userData.id) {
        navigate("/login");
        return;
    }
    // setIsAddingToCart(true);

    const response = await updateShoppingCart({
        foodId: id,
        updateQuantityBy: quantity,
        userId: userData.id,
    });

    if (response.data && response.data.isSuccess) {
        toastNotify("Item added to cart successfully")
    }

    // setIsAddingToCart(false);
}



    return (
        <div className='_card container'>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-12 col-sm-6  p-5">
                        <div className="card ">
                            <img src={data ? imageToDisplay : "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"} className='rounded-1' width='100%' alt="..." />
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 p-5'>
                        <div>
                            <h1 style={{ fontWeight: 'bold' }}>{foodInputs.name}</h1>
                            <div className='d-flex'>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <div className='mx-3'>
                                    <span >(1 customer review)</span>
                                </div>
                            </div>
                            <h3 className='mt-2' style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'monospace' }}>${foodInputs.price}</h3>
                            <p>{foodInputs.description}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow' style={{
                                width: "100px",
                                height: "43px",
                            }}>
                                <span style={{ color: "rgba(22,22,22,.7)" }} role='button'>
                                    <i className='bi bi-dash-circle-fill'
                                    onClick={()=> handleQuantity(-1)}
                                    ></i>
                                </span>
                                <span>
                                    <b>{quantity}</b>
                                </span>
                                <span style={{ color: "rgba(22,22,22,.7)" }} role='button'>
                                    <i className='bi bi-plus-circle-fill'
                                      onClick={()=> handleQuantity(+1)}
                                    ></i>
                                </span>
                            </div>
                            <button className='button-add mx-1'
                              onClick={() => handleAddToCart(data?.result?.id)}
                            >Add To Cart</button>

                        </div>
                        <div>
                            <span className='mt-2' style={{ fontSize: '25px', fontWeight: 'bold' }}>Sku: </span>
                            <span>8</span>
                        </div>
                        <div>
                            <span className='mt-2' style={{ fontSize: '25px', fontWeight: 'bold' }}>Category: </span>
                            <span style={{ color: '#3e693e' }}>{foodInputs.category}</span>
                        </div>
                        <div>
                            <span className='mt-2' style={{ fontSize: '25px', fontWeight: 'bold' }}>Tag: </span>
                            <span style={{ color: '#3e693e' }}>
                                <button className='button-taste'>{foodInputs.specialTag}</button>
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card