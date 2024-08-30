import React, { useState } from 'react'
import { useLoginUserMutation } from '../../Apis/authApi';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import inputHelper from '../../Helper/inputHelper';
import { setLoggedInUser } from '../../Storage/Redux/userAuthSlice';
const Login = () => {
    const [error, setError] = useState("");
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        userName: "",
        password: "",

    });

    const handleUserInput = (e) => {
        const temData = inputHelper(e, userInput);
        setUserInput(temData)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        const response = await loginUser({
            userName: userInput.userName,
            password: userInput.password,
        });
        if (response.data) {
            const { token } = response.data.result
            const { fullName, id, email, role } = jwtDecode(token);
            localStorage.setItem("token", token);
            dispatch(setLoggedInUser({ fullName, id, email, role }))
            navigate("/")
        } else if (response.error) {
            setError(response.error.data.errorMessages.$values)
        }
        // setLoading(false);
    }

    return (
        <div className='login'style={{background:'f8f7f2'}}>
            <div className='container text-center' style={{background:'f8f7f2'}}>
                <form method="post" onSubmit={handleSubmit} >
                    <h1 className='mt-5'>Login</h1>
                    <div className='mt-5'>
                        <div className='col-sm-6 offset-sm-3 col-xs-12 mt-4'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter Username'
                                required
                                name="userName"
                                value={userInput.userName}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div className='col-sm-6 offset-sm-3 col-xs-12 mt-4'>
                            <input
                                type="password"
                                className='form-control'
                                placeholder='Enter Password'
                                required
                                name="password"
                                value={userInput.password}
                                onChange={handleUserInput}
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        {error && <p className='text-danger'>{error}</p>}
                        <button type="submit" className='btn btn-success' style={{ width: "200px" }}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login