import React from 'react'
import './style.css'
const Carousel = () => {
    return (

        <div id="hero-carousel" className='_carousel carousel slide carousel-fade' data-bs-ride='carousel'>

            <div className='carousel-inner'>
                <div className='carousel-item active c-item'>
                    <img src="https://cdn.pixabay.com/photo/2019/04/04/15/30/hamburger-4103070_1280.jpg" className='d-block w-100 c-img' alt="" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: "200px" }}>
                        <h5 style={{ fontSize: "30px" }}>Our Fresh</h5>
                        <h5 style={{ fontSize: "30px", marginBottom: "20px" }}>New chesse</h5>
                        <button className='button-order' style={{ padding: "15px 25px" }}>Order Now</button>
                    </div>
                </div>
                <div className='carousel-item c-item'>
                    <img src="https://cdn.pixabay.com/photo/2023/01/21/17/49/burger-7734821_960_720.jpg" className='d-block w-100 c-img' alt="" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: "200px" }}>
                        <h5 style={{ fontSize: "30px" }}>Any Taste</h5>
                        <h5 style={{ fontSize: "30px", marginBottom: "20px" }}>You Imagine</h5>
                        <button className='button-order' style={{ padding: "15px 25px" }}>Order Now</button>
                    </div>
                </div>
                <div className='carousel-item c-item'>
                    <img src="https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_1280.jpg" className='d-block w-100 c-img' alt="" />
                    <div className="carousel-caption d-none d-md-block" style={{ top: "200px" }}>
                        <h5 style={{ fontSize: "30px" }}>Popular New</h5>
                        <h5 style={{ fontSize: "30px", marginBottom: "20px" }}>& Fresh Picks</h5>
                        <button className='button-order' style={{ padding: "15px 25px" }}>Order Now</button>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carousel