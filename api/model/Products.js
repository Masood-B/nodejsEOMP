const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `
        SELECt prodID, prodName, quantity, amount, Category, prodUrl
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
        SELECt prodID, prodName, quantity, amount, Category, prodUrl
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
}