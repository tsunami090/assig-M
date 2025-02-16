const userModel = require('../model/user')
const fs = require('fs')
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const profileImage = req.file; 
        const catalogs = req.files.map((e) => e.filename); 

         const user = await userModel.create({
            name,
            email,
            password,
            profileImage: profileImage.originalname,
            catalogs
        });

        res.status(201).json({
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();

        res.status(200).json({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);

        res.status(200).json({
            message: 'User retrieved successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const profileImage = req.file;
        const catalogs = req.files.map((e) => e.filename)

        const updatedUser = await userModel.findByIdAndUpdate(id, {
            name,
            email,
            password: hashedPassword,
            profileImage: profileImage.originalname,
            catalogs
        }, { new: true });

        res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}
