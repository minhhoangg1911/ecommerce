import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './style.css'
import Item from '../../Components/Item/Item'
import Slider from "react-slick";
import { useGetFoodQuery } from '../../Apis/foodApi'
import { useUpdateShoppingCartMutation } from '../../Apis/shoppingCartApi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toastNotify from '../../Helper/toastNotify'
import { toast } from "react-toastify";

const Menu = () => {
    const navigate = useNavigate()
    const { data } = useGetFoodQuery(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [updateShoppingCart] = useUpdateShoppingCartMutation();
    const userData = useSelector((state) => state.userAuthStore);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };

    const handleAddToCart = async (foodId) => {
        if (!userData.id) {
            toast.warning("please enter login!")
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

    console.log(data)

    return (
        <div className='menu'>
            <div className='inner'>
                <Header />
                <div className='_inner fs-1 fw-bold'>Menu</div>
            </div>
            <div className='container mt-5'>
                <div>
                    <h3 className='fs-2 fw-bold'>
                        Order Best Pizza
                    </h3>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Buffalo</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Margherita</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Napolitano</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Cappriciosa</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Napolitano</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='d-flex align-items-baseline gap-3'>
                                <h3 className='fs-3 fw-bold'>Hawaiian</h3>
                                <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                <div className='fs-3 fw-bold'>48$</div>
                            </div>
                            <p>Tomato sauce, mozzarella, virgin olive oil, fresh basil, garlic, pesto sos, mayo and ketchup flavours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <img src='https://i.pinimg.com/originals/8b/b3/87/8bb387ee878eddeb23baea344d4e13af.gif' width='100%' height={500} alt='' />
            </div>
            <div className='mt-5'>
                <Item />
            </div>
            <div>
                <div className="container slider-container">
                    <div >
                        <Slider {...settings}>
                            {data?.result.$values.map((item, index) => {
                                return (
                                    <div key={index} className='_carousel-item px-2'>
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
                                                    <h5>$ {item.price}</h5>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>
                    </div>
                </div>

            </div>
            <div className='_row row mt-5'>
                <div className='col-12 col-sm-6'>
                    {data?.result.$values.map((item, index) => {
                        return (
                            <div key={index} className='card d-flex'>
                                <div className='d-flex align-items-center gap-3' style={{ border: '1px solid #d63920' }}>
                                    <img src={item.image} alt='' style={{ maxWidth: '200px', border: '1px solid #d63920' }} />
                                    <div style={{ maxWidth: '400px' }}>
                                        <div className='d-flex align-items-center'>
                                            <h3 className='fs-3 fw-bold'>{item.name}</h3>
                                            <div style={{ borderBottom: '2px dotted #D63920', flexGrow: 1, margin: '0 15px 0 24px' }}></div>
                                            <div className='fs-3 fw-bold'>{item.price}$</div>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
                <div className='col-12 col-sm-6'>
                    <img src='https://i.pinimg.com/originals/55/3f/8c/553f8c3c0c86e7619ddb5bf4e5de8b1e.jpg' alt='' width='100%' className='rounded-1' style={{ border: '1px solid #d63920' }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu