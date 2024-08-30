import React from 'react'
import './style.css'
const Blog = () => {
    return (
        <>
            <div className='_blog container'>
                <div>
                    <h1 className='title mt-3 mb-2'>Blog All About Food</h1>
                    <div className='row'>
                        <div className='col-12 col-sm-4 p-3'>
                            <div className='image' >
                                <img src='https://foodchainmagazine.com/wp-content/uploads/sites/10/2024/03/fast-food-drive-thrus-image.jpeg' width="100%" height={300} alt=''/>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <h3 className='p-3' style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: "monospace", cursor: 'pointer' }}>Chicken Burger</h3>
                                <p style={{ maxWidth: "300px" }}>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                <span style={{ color: '#3e693e', fontWeight: "bold", cursor: 'pointer' }}>Read More</span>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 p-3'>
                            <div className='image' >
                                <img src='https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2150186054.jpg?q=w_1110,c_fill' width="100%" height={300} alt=''/>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <h3 className='p-3' style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: "monospace", cursor: 'pointer' }}>Whole Meal</h3>
                                <p style={{ maxWidth: "300px" }}>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                <span style={{ color: '#3e693e', fontWeight: "bold", cursor: 'pointer' }}>Read More</span>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 p-3'>
                            <div className='image' >
                                <img src='https://st2.depositphotos.com/1039098/8163/i/950/depositphotos_81631454-stock-photo-veggie-burger-and-coca-cola.jpg' width="100%" height={300} alt='' />
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <h3 className='p-3' style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: "monospace", cursor: 'pointer' }}>Royal Cheese</h3>
                                <p style={{ maxWidth: "300px" }}>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat</p>
                                <span style={{ color: '#3e693e', fontWeight: "bold", cursor: 'pointer' }}>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{marginTop:' 50px',backgroundSize:'cover',backgroundPosition:'cover'}}>
                <img src='https://watermark.lovepik.com/photo/20211208/large/lovepik-burger-fries-cola-set-picture_501593884.jpg' width='100%' height={600} alt='' />
            </div>
        </>
    )
}

export default Blog