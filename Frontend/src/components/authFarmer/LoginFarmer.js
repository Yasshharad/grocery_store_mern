import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './LoginFarmer.css'

function LoginFarmer() {
    const [farmer, setFarmer] = useState({
        email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setFarmer({ ...farmer, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/farmer/loginFarmer', { ...farmer })

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                    placeholder="Email" value={farmer.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={farmer.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/registerFarmer">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginFarmer
