import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
const Footer = () => {
  return (
    <div className='footer' style={{ marginTop: '20px' }}>
      <hr className='mt-5' style={{ color: '#3e693e', border: '1px solid #3e693e',marginBottom:'30px' }} />
      <div className='container'>
        <div className='row' >
          <div className='col-12 col-sm-3 p-3'>
            <div>
              <h5>Jimmie</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p>© 2023 Qode Interactive, All Rights Reserved</p>
            </div>
          </div>
          <div className='col-12 col-sm-3 p-3'>
            <div style={{ marginBottom: '10px' }}>
              <h5>Stop By And Say, Hi!</h5>
              <div>
                <NavLink>1614 E. Bell Rd #104.</NavLink>
              </div>
              <div>
                <NavLink>jimmy@example.com</NavLink>
              </div>
              <div>
                <NavLink>(602) 867-1010</NavLink>
              </div>
            </div>
            <div>
              <div>
                <NavLink>204 E. Pizzetta Tommaso</NavLink>
              </div>
              <div>
                <NavLink>jimmy@example.com</NavLink>
              </div>
              <div>
                <NavLink>(358) 867-1010</NavLink>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-3 p-3'>
            <div>
              <h5>Opening Hours</h5>
              <p>Mon-Fri.....08:00-12:00</p>
              <p>Saturday.....08:00-18:00</p>
              <p>Sunday.....08:00-18:00</p>
            </div>
            <div className='d-flex'>
              <i className='bi bi-facebook mx-2'></i>
              <i className="bi bi-twitter mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
            </div>
          </div>
          <div className='col-12 col-sm-3 p-3'>
            <h5>Flollow Us</h5>
            <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3dvcmxkZmFjZXNsYWJfcmVhbF9waG90b19vZl9hX2hhcHB5X21hbl9iaXRpbmdfYnVyZ2VyX3NpZGVfdmlld180Njg5ZTdiYi03NmZhLTRjODAtOWJjMi02NWNhYjVhYTc1Y2JfMS5qcGc.jpg' width={200} style={{ borderRadius: '20px' }} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer