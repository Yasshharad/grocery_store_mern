const asyncHandler = require("express-async-handler");
const Farmer = require("../models/farmerModels");
const generateToken = require("../utils/generateToken1");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
module.exports.authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const farmer = await Farmer.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: farmer._id,
            name: farmer.name,
            email: farmer.email,
            isAdmin: farmer.isAdmin,
            pic: farmer.pic,
            token: generateToken(farmer._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
module.exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    const farmerExists = await Farmer.findOne({ email });

    if (farmerExists) {
        res.status(404);
        throw new Error("User already exists");
    }

    const farmer = await Farmer.create({
        name,
        email,
        password,
        pic,
    });

    if (farmer) {
        res.status(201).json({
            _id: farmer._id,
            name: farmer.name,
            email: farmer.email,
            isAdmin: farmer.isAdmin,
            pic: farmer.pic,
            token: generateToken(farmer._id),
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
module.exports.updateUserProfile = asyncHandler(async (req, res) => {
    const farmer = await Farmer.findById(req.user._id);

    if (farmer) {
        farmer.name = req.body.name || farmer.name;
        farmer.email = req.body.email || farmer.email;
        farmer.pic = req.body.pic || farmer.pic;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedFarmer = await farmer.save();

        res.json({
            _id: updatedFarmer._id,
            name: updatedFarmer.name,
            email: updatedFarmer.email,
            pic: updatedFarmer.pic,
            isAdmin: updatedFarmer.isAdmin,
            token: generateToken(updatedFarmer._id),
        });
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }
});
