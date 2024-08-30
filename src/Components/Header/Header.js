import React from 'react'
import './style.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { emptyUserState, setLoggedInUser } from '../../Storage/Redux/userAuthSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shoppingCartFromStore = useSelector(
    (state) => state.shoppingCartStore.cartItems ?? []
  )

  const userData = useSelector((state) => state.userAuthStore);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/");
  }

  const totalPrice = shoppingCartFromStore.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.food.price
  }, 0)

  return (

    <div className='header_1'>
      <div className='header_nav_title container-fluid d-flex justify-content-between align-items-center text-light' style={{ background: "#3e693e" }}>
        <div className='d-flex m-2'>
          <div className='d-flex' style={{ gap: "5px", margin: "0 20px" }}>
            <i className="bi bi-clock"></i>
            <span>Open Now</span>
          </div>
          <div className='d-flex ' style={{ gap: "5px", margin: "0 20px" }}>
            <i className="bi bi-geo-alt"></i>
            <span>Choose your location</span>
          </div>
          <div className='d-flex ' style={{ gap: "5px", margin: "0 20px" }}>
            <i className="bi bi-telephone"></i>
            <span>+304 555 8473</span>
          </div>
        </div>
        <div className='d-flex mx-2' >
          <i className="bi bi-youtube" style={{ margin: "0 30px 0 0", cursor: 'pointer' }}></i>
          <i className="bi bi-facebook" style={{ margin: "0 30px 0 0", cursor: 'pointer' }}></i>
          <i className="bi bi-instagram" style={{ margin: "0 30px 0 0", cursor: 'pointer' }}></i>
          <i className="bi bi-twitter" style={{ margin: "0 30px 0 0", cursor: 'pointer' }}></i>

        </div>
        <div className='d-flex' style={{ marginLeft: "auto" }}>
          {userData?.id && (
            <>
              <div className='d-flex justify-content-center align-items-center'>
                Welcome, {userData.fullName}
                <div className="dropdown" >
                  <a className="btn btn-secondary dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'none' }} >
                    Setting
                  </a>

                  <ul className="dropdown-menu" style={{ background: '#3e693e', color: '#fff', textAlign: 'center' }}>
                    <li><NavLink className="nav-link" to="/register"

                      onClick={handleLogout}
                    >Logout</NavLink></li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {!userData?.id && (
            <>
              <div className="dropdown" >
                <a className="btn btn-secondary dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'none' }} >
                  Setting
                </a>

                <ul className="dropdown-menu" style={{ background: '#3e693e', color: '#fff', textAlign: 'center' }}>
                  <li><NavLink className="nav-link p-2" to="/register">Register</NavLink></li>
                  <li><NavLink className="nav-link p-2" to="/login">Login</NavLink></li>
                </ul>
              </div>

            </>)}


        </div>
      </div>
      <nav className="header_nav_link navbar navbar-expand-lg ">

        <div className="_nav container-fluid" style={{ background: "#f8f7f2" }}>
          <button className="_button-order btn" href="#" style={{ margin: "0 0 0 30px" }}>ORDER NOW</button>
          <NavLink className="name nav-link" href="#">JimMie</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="_nav-ul navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
              <li className="nav-item">
                <NavLink className="_home nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/order/myOrders">My Order</Link>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>

            </ul>
            <div className='_search d-flex justify-content-between align-items-center'>
              <div>
                <i className="bi bi-search" style={{ fontSize: "20px", cursor: 'pointer' }}></i>
              </div>

              <div className='_cart'>
                <div className='_card' style={{ background: 'f8f7f2' }}>
                  <i style={{ fontSize: "20px", cursor: 'pointer' }} className="bi bi-bag-plus"></i>
                  <NavLink className='text-decoration-none text-dark fw-bold ' to='/cart'>Cart ({userData.id && `${shoppingCartFromStore.length}`})</NavLink>
                  <div className='_card-shop'>
                    <div className='card p-3' style={{ border: '1px solid #d63920' }}>
                      {shoppingCartFromStore.map((cartItems, index) => {

                        return (
                          <div key={index} className='d-flex gap-2 align-items-center justify-content-around w-100 mt-2 mb-2'>
                            <img src={cartItems.food.image} width='100px' alt='' className='rounded-1' style={{ border: '1px solid #d63920' }} />
                            <div>
                              <div>
                                <p className='fs-5 fw-bold'>Taco Dip</p>
                              </div>
                              <div>
                                <p className='fs-6'>{cartItems.quantity} x {cartItems.food.price}$</p>
                              </div>
                            </div>
                            <i className="bi bi-x-circle-fill"></i>

                          </div>
                        )
                      })}

                      <div className='card-footer'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='fs-5 fw-bold'>Subtotal:</div>
                          <div className='fs-5 fw-bold'>{totalPrice}$</div>
                        </div>
                        <div style={{ width: '100%' }}>
                          <button className='border-0 p-2 text-white fw-bold rounded-2 mt-2' style={{ background: '#d63920', width: '100%' }}>GO TO CART</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header