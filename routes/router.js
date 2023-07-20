//*  Import express

const express = require("express")
const { employeeRegister, getAllEmployees,getProfile,deleteEmployee,editUser } = require("../controllers/logic")
const upload = require("../multerConfig/storageConfig")



//* Create an object for router class in express

const router = new express.Router()


//* Route for register new employee

router.post('/employees/register',upload.single('user_profile'),employeeRegister)

//get all employees
router.get('/employees/getAllEmployees',getAllEmployees)

//get profile
router.get('/employees/getProfile/:id',getProfile)

//delete employee
router.delete('/employees/deleteProfile/:id',deleteEmployee)

//edit employee
router.post('/employees/editProfile/:id',upload.single('user_profile'),editUser)


module.exports = router