const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users} = require('../model')

// ===== User Router =====

routes.get('/users', (req,res)=>{
    users.fetchUsers(req, res)
})