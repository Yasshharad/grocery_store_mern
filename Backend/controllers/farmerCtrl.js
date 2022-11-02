const Farmers = require('../models/farmerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const farmerCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, password, contactNumber, address, city, state, district, pincode } = req.body;

            const farmer = await Farmers.findOne({ email })
            if (farmer) return res.status(400).json({ msg: "The email already exists." })

            if (password.length < 6)
                return res.status(400).json({ msg: "Password is at least 6 characters long." })
            if (pincode.length > 6)
                return res.status(400).json({ msg: "Pinocode should not be more than 6 characters." })

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newFarmer = new Farmers({
                name, email, contactNumber, address, city, state, district, pincode, password: passwordHash
            })

            // Save mongodb
            await newFarmer.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({ id: newFarmer._id })
            const refreshtoken = createRefreshToken({ id: newFarmer._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/farmer/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
            })

            res.json({ accesstoken })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const farmer = await Farmers.findOne({ email })
            if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." })

            const isMatch = await bcrypt.compare(password, farmer.password)
            if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({ id: farmer._id })
            const refreshtoken = createRefreshToken({ id: farmer._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/farmer/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
            })

            res.json({ accesstoken })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/farmer/refresh_token' })
            return res.json({ msg: "Logged out" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({ msg: "Please Login or Register" })

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ msg: "Please Login or Register" })

                const accesstoken = createAccessToken({ id: farmer.id })

                res.json({ accesstoken })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    getFarmer: async (req, res) => {
        try {
            const farmer = await Farmers.findById(req.farmer.id).select('-password')
            if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." })

            res.json(farmer)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}


const createAccessToken = (farmer) => {
    return jwt.sign(farmer, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '11m' })
}
const createRefreshToken = (farmer) => {
    return jwt.sign(farmer, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = farmerCtrl