import React from 'react'
import './style.css'
const Choose = () => {
    return (
        <div className='container choose' >
            <div className='row d-flex' style={{ gap: "5px", marginBottom: "10px" }} >
                <img className='col-lg-6' src="https://img.pikbest.com/origin/10/05/69/pIkbEsT7mpIkbEsTnUt.jpg!w700wp" width='100%' alt='' />
                <div className='col-lg-5'>
                    <h1>Pick Your Meal For A Low Price</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div style={{ marginTop: "20px" }}>
                        <button className='button-order' >Order Now</button>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col-lg-6' style={{ marginBottom: "20px" }}>
                    <h1>Deal Of The Day</h1>
                    <ul>
                        <li> Double Cheesburger with the fries</li>
                        <li>Royal with chess and big fries</li>
                        <li>Bacon burger with salads</li>
                    </ul>
                    <div style={{ marginTop: "20px" }}>
                        <button className='button-order' >Order Now</button>
                    </div>
                </div>
                <img src="https://hanamihotel.com/wp-content/uploads/2023/07/Hamburger.png" width='100%' className='col-lg-6' alt='' />

            </div>
        </div>
    )
}

export default Choose