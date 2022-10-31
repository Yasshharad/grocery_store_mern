const jwt = require("jsonwebtoken");

const generateToken1 = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.export = generateToken1;