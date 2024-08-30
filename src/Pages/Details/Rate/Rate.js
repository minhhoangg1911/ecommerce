import React, { useState } from 'react'
import './style.css'
import { useCreateCommentMutation, useDeleteCommentMutation, useGetCommentByIdQuery } from '../../../Apis/commentApi'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
const Rate = () => {
    const { id } = useParams();
    const [description, setDescription] = useState(true)
    const [additional, setAdditional] = useState(false)
    const [review, setReviews] = useState(false)
    const { data } = useGetCommentByIdQuery(id);
    const userId = useSelector((state) => state.userAuthStore.id);
    const [content, setContent] = useState('');
    const [createComment] = useCreateCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

    const initialCommentData = {
        Content: content,
        CreateAt: getCurrentDateTime(),
        FoodId: parseInt(id),
        UserId: userId
    }



    function getCurrentDateTime() {
        const date = new Date();
        // Lấy phần thời gian theo ISO string
        let isoString = date.toISOString();
        // Lấy số milliseconds từ đầu chuỗi đến phần giây
        let milliseconds = date.getMilliseconds().toString().padStart(3, '0');
        // Thêm múi giờ +07:00
        let timeZoneOffset = '+07:00';
        // Kết hợp thành chuỗi như yêu cầu
        return isoString.substring(0, 19) + '.' + milliseconds + timeZoneOffset;
    }
    console.log(getCurrentDateTime())



    // console.log(userId)
    console.log(data)

    const handleClick = () => {
        setReviews(false)
        setAdditional(false)
        setDescription(true);
    }
    const handleClickAdditinal = () => {
        setDescription(false)
        setReviews(false)
        setAdditional(true)
    }
    const handleClickReview = () => {
        setDescription(false)
        setAdditional(false)
        setReviews(true)
    }

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const response = await createComment(initialCommentData);
            if (response.data) {
                toast.success("create success")
            } else {
                toast.error("create error")
            }
        } catch (error) {
            toast.error("create error")
        }
    }

    const handleDeleteComment = async (id) => {
        toast.promise(
            deleteComment(id),
            {
                pending: 'Processing your request...',
                success: 'Menu Item Deleted Successfully 👌',
                error: 'Error encoutnered 🤯'
            },
            {
                theme: "dark",
            }
        )
    }

    return (
        <div className='rate container'>
            <div className=''>
                <div className='d-flex justify-content-center'>
                    <h3 style={{ fontSize: '40px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'League Gothic, sans-serif' }} className='mx-2' onClick={handleClick}>Description</h3>
                    <h3 style={{ fontSize: '40px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'League Gothic, sans-serif' }} className='mx-2' onClick={handleClickAdditinal}> Additional information</h3>
                    <h3 style={{ fontSize: '40px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'League Gothic, sans-serif' }} className='mx-2' onClick={handleClickReview}>Reviews ({data?.result.$values.length})</h3>
                </div>
                {description ? (
                    <div>
                        Paulo fastidii laboras vix an, Lorem Ipsum. Proin qual de suis erestopius sed diam nonummy nibh sollicituin, lorem quis biben auct or nisi elit consequ ipsum. Nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Sed non mauris vitae erat consequat auc tor eu in elit. Class aptent taciti socios.
                    </div>
                ) : ""}
                {additional ? (
                    <div>
                        <div className='d-flex mt-2'>
                            <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }}>Weight: </h1>
                            <p className='ms-3'>0.5 kg</p>
                        </div>
                        <div className='d-flex'>
                            <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }}>Dimensions: </h1>
                            <p className='ms-3'>10 × 10 × 10 cm</p>
                        </div>

                    </div>
                ) : ""}
                {review ? (
                    <div >
                        <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'left', padding: '10px 0', fontFamily: 'League Gothic, sans-serif' }}>1 review for Crust Burger </h1>
                        {data.result.$values.map((item, index) => {
                            return (
                                <div className='review d-flex align-items-center' key={index}>
                                    {/* <img className='me-5 mt-2' src='https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-black-man-smiling-on-a-black-background-image_2941286.jpg' width={150} style={{ borderRadius: '5px' }} alt='' /> */}
                                    <div>
                                        <div className='d-flex mb-2'>
                                            <i className="bi bi-star mx-1"></i>
                                            <i className="bi bi-star mx-1"></i>
                                            <i className="bi bi-star mx-1"></i>
                                            <i className="bi bi-star mx-1"></i>
                                            <i className="bi bi-star mx-1"></i>
                                        </div>
                                        <div className='d-flex'>
                                            <h3 className='me-2' style={{ fontSize: '20px', fontFamily: 'League Gothic, sans-serif', fontWeight: '600' }}>{item.user.name}</h3>
                                            <p>{item.createAt}</p>
                                        </div>
                                        <p className='text-start'>{item.content}</p>
                                        <div className='text-start'>
                                            <button onClick={() => handleDeleteComment(item.id)} className='btn btn-warning mb-2'>Delete</button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className='review d-flex'>
                        <img className='me-5 mt-2' src='https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-black-man-smiling-on-a-black-background-image_2941286.jpg' width={150} style={{ borderRadius: '5px' }} alt='' />
                        <div>
                            <div className='d-flex mb-2'>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                            </div>
                            <div className='d-flex'>
                                <h3 className='me-2' style={{ fontSize: '20px', fontFamily: 'League Gothic, sans-serif', fontWeight: '600' }}>Adam Corty</h3>
                                <p>February 22, 2023</p>
                            </div>
                            <p className='text-start'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div> */}
                        <div className='text-start mt-4'>
                            <h1 className='fs-4 fw-bold'>Add a review</h1>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <p>Your Rating *</p>
                            <div className='d-flex mb-2'>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                                <i className="bi bi-star mx-1"></i>
                            </div>
                        </div>
                        <div>
                            <form method='POST'>
                                <div>

                                    <div className="mb-3">
                                        <textarea className="form-control mt-3 p-3" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder='Your Review*' style={{ background: '#f8f7f2', border: '1px solid #1a1a1a' }}
                                            name='content'
                                            onChange={(e) => setContent(e.target.value)}
                                        />
                                    </div>
                                    <div className='review-letter d-flex w-100' style={{ gap: '20px' }}>
                                        <div className="input-name mb-3 w-50">
                                            <input type="text" className="form-control p-2" id="exampleFormControlInput1" placeholder="Your Name*" style={{ background: '#f8f7f2', border: '1px solid #1a1a1a' }} />
                                        </div>
                                        <div className="input-email mb-3 w-50">
                                            <input type="email" className="form-control p-2" id="exampleFormControlInput1" placeholder="Your Email*" style={{ background: '#f8f7f2', border: '1px solid #1a1a1a' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start d-flex">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>

                                <div className='text-start mt-3'>
                                    <button onClick={handleAddComment} className='button-letter'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                ) : ""}
            </div>
        </div >
    )
}

export default Rate