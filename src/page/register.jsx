import React, { useState } from 'react';
import WebNav from '../component/Nav';
function Register() {
    const [userData, setUserData] = useState({
        email: '',
        user_name: '',
        con_num: '',
        first_name: '',
        last_name: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = () => {
        // Send a POST request to the backend
        fetch('http://localhost:3333/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    // Registration was successful, you can redirect or show a success message

                    // setUserData({
                    //     email: '',
                    //     user_name: '',
                    //     con_num: '',
                    //     first_name: '',
                    //     last_name: '',
                    //     password: '',
                    // });
                    
                    setErrorMessage('');
                    console.log('Registration successful');
                } else {
                    // Registration failed, display an error message
                    setErrorMessage(data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage('An error occurred during registration.');
            });
    };

    return (
        <div>
            <WebNav/>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="user_name" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input type="text" name="con_num" onChange={handleInputChange} />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first_name" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleInputChange} />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Register
                </button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default Register;
