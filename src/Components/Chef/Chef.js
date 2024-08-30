import React from 'react'
import './style.css'
const Chef = () => {
    return (
        <div className='chef container'>
            <div>
                <h1>Our Main Chefs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className='row'>
                <div className='_card col-12 col-sm-4 p-3' style={{ position: 'relative' }}>
                    <img src='https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg' height={300} width='100%' style={{ borderRadius: '10px' }} alt='' />
                    <div className='_animated d-flex flex-column p-2' style={{ position: 'absolute', top: "30%", right: 15, color: 'white', background: "#fff", borderRadius: '5px  0 0 5px' }}>
                        <i className='bi bi-facebook' style={{ color: "red" }}></i>
                        <i className='bi bi-instagram' style={{ color: "red" }}></i>
                        <i className='bi bi-twitter' style={{ color: "red" }}></i>
                    </div>
                    <div>
                        <h3 className='mt-3' style={{fontWeight:'bold',fontFamily:'monospace'}}>Russel Crown</h3>
                        <p style={{color:'3e693e'}}>Main Chef</p>
                    </div>
                </div>
                <div className='_card col-12 col-sm-4 p-3' style={{ position: 'relative' }}>
                    <img src='https://i.fbcd.co/products/original/c050c984b1f160ef5ca769a6d5a31315fc30584cbc53fa84d2da34f29788ca70.jpg' height={300} width='100%' style={{ borderRadius: '10px' }} alt='' />
                    <div className='_animated d-flex flex-column p-2' style={{ position: 'absolute', top: "30%", right: 15, color: 'white', background: "#fff", borderRadius: '5px  0 0 5px' }}>
                        <i className='bi bi-facebook' style={{ color: "red" }}></i>
                        <i className='bi bi-instagram' style={{ color: "red" }}></i>
                        <i className='bi bi-twitter' style={{ color: "red" }}></i>
                    </div>
                    <div>
                        <h3 className='mt-3' style={{fontWeight:'bold',fontFamily:'monospace'}}>Ari Edely</h3>
                        <p style={{color:'3e693e'}}>Chef Assistant</p>
                    </div>
                </div>
                <div className='_card col-12 col-sm-4 p-3' style={{ position: 'relative' }}>
                    <img src='https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=' width='100%' height={300} style={{ borderRadius: '10px', }} alt=''/>
                    <div className='_animated d-flex flex-column p-2' style={{ position: 'absolute', top: "30%", right: 15, color: 'white', background: "#fff", borderRadius: '5px  0 0 5px' }}>
                        <i className='bi bi-facebook' style={{ color: "red" }}></i>
                        <i className='bi bi-instagram' style={{ color: "red" }}></i>
                        <i className='bi bi-twitter' style={{ color: "red" }}></i>
                    </div>
                    <div>
                        <h3 className='mt-3' style={{fontWeight:'bold',fontFamily:'monospace'}}>Lana Mary</h3>
                        <p style={{color:'3e693e'}}>Sauce chef</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef