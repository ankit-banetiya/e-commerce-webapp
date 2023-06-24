import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/slices/AuthSlice'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const notify = () => toast("Succesfully Login");
    const errorNotify = () => toast("Please Enter Username & Password");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0 && password.length > 0) {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    password: password,
                })
            })
                .then(res => res.json())
                .then((data) =>
                    dispatch(loginUser({ token: data.token, firstName: data.firstName, lastName: data.lastName, image: data.image })),
                    notify(),
                )
        }else{
            errorNotify()
        }
    }
    
    return (
        <>
           <ToastContainer/>
            <form className="login" onSubmit={(e) => handleSubmit(e)}>
                <h2>Welcome, User!</h2>
                <p>Please log in</p>
                <input type="text" placeholder="UserName" onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='btn-submit'>Log In</button>
                <div class="links">
                    <Link to="#">Forgot password</Link>
                    <Link to="#">Register</Link>
                </div>
            </form>
        </>
    )
}
