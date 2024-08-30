import React, { useState } from 'react'
import { useRegisterUserMutation } from '../../Apis/authApi'
import { useNavigate } from 'react-router-dom'
import toastNotify from '../../Helper/toastNotify'
import inputHelper from '../../Helper/inputHelper'
import { SD_Roles } from '../../Utility/SD'

const Register = () => {
    const navigate = useNavigate()
    const [registerUser] = useRegisterUserMutation();
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        userName: "",
        password: "",
        role: "",
        name: "",
    });

    const handleUserInput = (e) => {
        const temData = inputHelper(e, userInput);
        setUserInput(temData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response= await registerUser({
            userName: userInput.userName,
            password: userInput.password,
            role: userInput.role,
            name: userInput.name
        });
        if (response.data) {
            toastNotify("Register successful! Please login to continue.")
            navigate("/login")
        } else if (response.error) {
            toastNotify(response.error.data.errorMessages.$values[0], "error");
        }

        setLoading(false);
    }

    return (
        <div className='register' style={{background:'f8f7f2'}}>
            <div className='container text-center'>
                <form method="post" onSubmit={handleSubmit} >
                    <h1 className='mt-5'>Register</h1>
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
                                type="text"
                                className='form-control'
                                placeholder='Enter Name'
                                required
                                name="name"
                                value={userInput.name}
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
                        <div className='col-sm-6 offset-sm-3 col-xs-12 mt-4'>
                            <select className='form-control form-select' required
                                name="role"
                                value={userInput.role}
                                onChange={handleUserInput}
                            >
                                <option value="">Select role</option>
                                <option value={`${SD_Roles.CUSTOMER}`}>Customer</option>
                                <option value={`${SD_Roles.ADMIN}`}>Admin</option>

                            </select>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-success' type="submit"
                        disabled={loading}
                        >Register</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register