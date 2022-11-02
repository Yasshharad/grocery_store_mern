import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegisterFarmer() {
    const [farmer, setFarmer] = useState({
        name: '', email: '', password: '', contactNumber: '', address: '', city: '', state: '', district: '', pincode: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setFarmer({ ...farmer, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/farmer/registerFarmer', { ...farmer })

            localStorage.setItem('firstLogin', true)


            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                    placeholder="Name" value={farmer.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                    placeholder="Email" value={farmer.email} onChange={onChangeInput} />

                <input type="text" name="contactNumber" required
                    placeholder="Contact number" value={farmer.contactNumber} onChange={onChangeInput} />

                <input type="text" name="address" required
                    placeholder="Address" value={farmer.address} onChange={onChangeInput} />

                <input type="text" name="city" required
                    placeholder="City" value={farmer.city} onChange={onChangeInput} />

                <input type="text" name="district" required
                    placeholder="District" value={farmer.district} onChange={onChangeInput} />

                <input type="text" name="state" required
                    placeholder="State" value={farmer.state} onChange={onChangeInput} />


                <input type="text" name="pincode" required
                    placeholder="Pincode" value={farmer.pincode} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={farmer.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/loginFarmer">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterFarmer