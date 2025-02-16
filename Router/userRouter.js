const express = require('express');
const router = express.Router();
const{createUser,getAllUsers,getUserById,updateUser,deleteUser}=require('../Controller/userController')
const upload = require('../utils/multer')
router.post('register', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'catalogs', maxCount: 10 }]),createUser);
router.get('users', getAllUsers);
router.get('users/:id',getUserById);
router.put('users/:id', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'catalogs', maxCount: 10 }]),updateUser);
router.delete('users/:id', deleteUser);
module.exports = router;
