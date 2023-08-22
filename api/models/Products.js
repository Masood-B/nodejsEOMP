const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    async registerProduct(req, res){
        const data = req.body
        const query = `
        INSERT INTO Products
        SET ?;
        `
        db.query(query, [data], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "You have register a product"
            })
        })
    }
    updateProduct(req, res){
        const query = `
        UPDATE Products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query, [req.body, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Your products has been updated"
                })
            })
    }
    deleteProduct(req, res){
        const query = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id}
        `
        db.query(query, (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The products have been removed"
            })
        })
    }
    sortAscProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        ORDER BY amount ASC;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    sortDESCProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        ORDER BY amount DESC;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
}

module.exports = Products