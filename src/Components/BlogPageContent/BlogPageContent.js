import React from 'react'
import './style.css'
const BlogPageContent = () => {
  return (
    <div className='_blog-page-content'>
      <div className='_blog-side'>
        <div className='_img'>
          <div className='_item d-flex flex-row p-3 mx-2 w-100'>
            <div className='mx-5 text-white Segoe UI'>
              <h1 className='fw-bold font-monospace'>Blog Right Sidebar</h1>
            </div>
          </div>

        </div>
      </div >
      <div className=' container'>
        <div className='row mt-5 '>
          <div className='col-12 col-sm-9'>

            <div className='w-100'>
              <img src="https://images.pexels.com/photos/7801199/pexels-photo-7801199.jpeg" style={{ borderRadius: '10px' }} width='100%' height="400" alt='' />
            </div>
            <div className='mt-3'>
              <p>AppetizersHealthy FoodRestaurants</p>
            </div>
            <div>
              <h3 className='fw-bolds' style={{ fontSize: '60px', fontFamily: 'Dela Gothic One, sans-serif' }}>Teeth For Burgers</h3>
            </div>
            <div className='pe-3'>
              <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autem neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum.</p>
              <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum hic voluptas repudiandae.</p>
            </div>
            <div className='d-flex flex-column flex-sm-row' style={{ gap: '30px' }}>
              <div className='col-12 col-sm'>
                <img src='https://img.lovepik.com/photo/48012/4049.jpg_wh860.jpg' height={400} width='100%' className='rounded-1' alt='' />
              </div>
              <div className='col-12 col-sm'>
                <img src='https://www.shutterstock.com/image-photo/classic-tasty-burger-on-wooden-600nw-2476088505.jpg' height={400} width='100%' className='rounded-1' alt='' />
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='fw-bolds' style={{ fontSize: '60px', fontFamily: 'Dela Gothic One, sans-serif' }}>Top Five Restaurants</h3>
              <div>
                Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autem neque volu ptatum. Et et ducimus ut est aut.
              </div>
            </div>
            <div className='d-flex mt-5' style={{ gap: '30px', alignItems: 'center', padding: '0 40px' }}>
              <div>
                <i className="bi bi-arrow-through-heart-fill p-4 rounded-5" style={{ border: '1px solid #3e693e', color: '3e693e' }}></i>
              </div>
              <div>
                <p className='fw-bold fs-5' style={{ maxWidth: '400px' }}>Voluptatem ea rerum nisi. ullam debitis optio.
                  quae odio quasi repellat sit.</p>
              </div>
            </div>
            <div className='mt-5'>
              <img src='https://ippgroup.vn/website/var/tmp/image-thumbnails/0/3943/thumb__auto_7e7e0dad23d3cca166d67825e3368bc6/Burgerking-IPPG.jpeg' width='100%' className='rounded-3' alt='' />
            </div>
            <div className='mt-5'>
              <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autem neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum.</p>
            </div>
            <div className='mt-5'>
              <h3 style={{ fontSize: '60px', fontFamily: 'Dela Gothic One, sans-serif' }}>Best Burgers In Town</h3>
              <p>Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et dolorum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autem neque volu ptatum. Et et ducimus ut est aut.</p>
            </div>
            <div>
              <p className='fs-5 fw-bold' style={{ color: '#3e693e', cursor: 'pointer' }}>Read More</p>
            </div>
          </div>
          <div className='col-12 col-sm-3  '>

            <div className="card-group text-center mb-5" >
              <div className="card" style={{ background: '#f8f7f2' }}>
                <div className='text-center mt-3'>
                  <img style={{ borderRadius: '100%' }} src="https://images.pexels.com/photos/7801199/pexels-photo-7801199.jpeg" width={100} alt="..." />
                </div>

                <div className="card-body">
                  <h5 className="card-title fs-5 fw-bold">Alex Johnson</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div style={{ position: 'relative' }} >
                <input className='w-100 p-2 mb-5' placeholder='search' style={{ background: '#f8f7f2' }} />
                <i className='bi bi-search' style={{ position: 'absolute', right: 10, top: 10, zIndex: 1, cursor: 'pointer' }}></i>
              </div>
            </div>
            <div>
              <h1 className='fs-3 fw-bold' style={{ fontFamily: 'Dela Gothic One, sans-serif' }}>Categories</h1>
              <div className='d-flex' >
                <p className='hover'>Dinner</p>
              </div>
              <div className='d-flex' >
                <p className='hover'>Fast food</p>
              </div>
              <div className='d-flex' >
                <p className='hover'>Healthy Food</p>
              </div>
              <div className='d-flex' >
                <p className='hover'>Recipes</p>
              </div>
              <div className='d-flex' >
                <p className='hover'>Restaurants</p>
              </div>
              <div className='d-flex' >
                <p className='hover'>Vegan</p>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='fs-3 fw-bold' style={{ fontFamily: 'Dela Gothic One, sans-serif' }}>Recent Posts</h3>
              <div className='custom-flex d-flex align-items-center flex-column flex-sm-row justify-content-start  gap-3 mt-3'>
                <img className='rounded-3' src='https://img.freepik.com/premium-photo/hamburger-glass-orange-juice_853645-1056.jpg' width='100px' alt='' />
                <div>
                  <div className='fs-5 fw-bold'>Grab & Go</div>
                  <p>January 27, 2023</p>
                </div>
              </div>
              <div className='custom-flex d-flex align-items-center  flex-column flex-sm-row justify-content-start gap-3 mt-4'>
                <img className='rounded-3' src='https://img.pikbest.com/origin/10/05/69/pIkbEsT7mpIkbEsTnUt.jpg!w700wp' width='100px' alt='' />
                <div>
                  <div className='fs-5 fw-bold'>Vege Food</div>
                  <p>January 27, 2023</p>
                </div>
              </div>
              <div className=' custom-flex d-flex align-items-center  flex-column flex-sm-row justify-content-start gap-3 mt-4'>
                <img className='rounded-3' src='https://watermark.lovepik.com/photo/20211208/large/lovepik-burger-fries-cola-set-picture_501593884.jpg' width='100px'alt='' />
                <div>
                  <div className='fs-5 fw-bold'>Make A Meal</div>
                  <p>January 27, 2023</p>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='fs-3 fw-bold' style={{ fontFamily: 'Dela Gothic One, sans-serif' }}>Tags</h3>
              <div className=''>
                <div className='d-flex flex-column flex-sm-row gap-3 mt-3'>
                  <div>
                    <button className='button btn'>Chicago</button>
                  </div>
                  <div>
                    <button className='button btn'>Cool</button>
                  </div>
                </div>
                <div className='d-flex flex-column flex-sm-row gap-3 mt-3'>
                  <div>
                    <button className='button btn'>Delicious</button>
                  </div>
                  <div>
                    <button className='button btn'>Food</button>
                  </div>
                </div>
                <div className='d-flex flex-column flex-sm-row gap-3 mt-3'>
                 
                  <div>
                    <button className='button btn'>Hamburgers</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <img className='rounded-3' src='https://www.shutterstock.com/image-photo/burger-special-discount-banner-blank-600nw-2480641111.jpg' width='100%' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPageContent