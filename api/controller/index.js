const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products} = require('../models')

// ===== User Router =====

routes.get('/users', (req,res)=>{
    users.fetchUsers(req, res)
})

routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})

routes.post('/user', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})

routes.post('/login', bodyParser.json(),
(req, res)=>{
    users.login(req, res)
})

routes.put('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.patch('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

// ===== Products Router =====

routes.get('/products', (req,res)=>{
    products.fetchProducts(req, res)
})

routes.get('/product_amount_asc', (req, res)=>{
    products.ascAmountProducts(req, res)
})

routes.get('/product_amount_desc', (req, res)=>{
    products.descAmountProducts(req, res)
})

routes.get('/product_name_asc', (req, res)=>{
    products.ascNameProducts(req, res)
})

routes.get('/product_name_desc', (req, res)=>{
    products.descNameProducts(req, res)
})

routes.get('/products/thriller', (req, res)=>{
    products.filterThrillerProducts(req, res)
})

routes.get('/products/drama', (req, res)=>{
    products.filterDramaProducts(req, res)
})

routes.get('/products/comedy', (req, res)=>{
    products.filterComedyProducts(req, res)
})

routes.get('/products/fantasy', (req, res)=>{
    products.filterFantasyProducts(req, res)
})

routes.get('/products/musical', (req, res)=>{
    products.filterMusicalProducts(req, res)
})

routes.get('/products/mystery', (req, res)=>{
    products.filterMysteryProducts(req, res)
})

routes.get('/products/zombie', (req, res)=>{
    products.filterZombieProducts(req, res)
})

routes.get('/product/:id', (req,res)=>{
    products.fetchProduct(req, res)
})

routes.get('/search/:id', (req, res)=>{
    products.searchProduct(req, res)
})

routes.post('/users', bodyParser.json(),
(req, res)=>{
    products.registerProduct(req, res)
})

routes.put('/product/:id', bodyParser.json(),
(req, res)=>{
    products.updateProduct(req, res)
})

routes.patch('/product/:id', bodyParser.json(),
(req, res)=>{
    products.updateProduct(req, res)
})

routes.delete('/product/:id', (req, res)=>{
    products.deleteProduct(req, res)
})

module.exports = {
    express,
    routes
}