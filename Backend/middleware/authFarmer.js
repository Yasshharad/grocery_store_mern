const jwt = require('jsonwebtoken')

const authFarmer = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) return res.status(400).json({ msg: "Invalid Authentication" })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, farmer) => {
            if (err) return res.status(400).json({ msg: "Invalid Authentication" })

            req.farmer = farmer
            next()
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authFarmer;