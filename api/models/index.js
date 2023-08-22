const Users = require('./Users')
const Products = require('./Products')
// Create an object
module.exports = {
    users: new Users(),
    products: new Products()
}