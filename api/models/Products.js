const db = require('../config')

class Products{

    // Get Products

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

     // Get Product

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

    // Register Product

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

    // Update Product

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

    // Delete Product

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

     // Sort Products

    ascNameProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        ORDER BY prodName ASC;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    descNameProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        ORDER BY prodName DESC;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    ascAmountProducts(req, res){
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
    descAmountProducts(req, res){
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

    // Filter Products

    filterThrillerProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Thriller';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterDramaProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Drama';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterComedyProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Comedy';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterFantasyProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Fantasy';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterMusicalProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Musical';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterMysteryProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Mystery';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    filterZombieProducts(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE Category = 'Horror Zombie';
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    // Search Products

    searchProduct(req, res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE prodName LIKE '%${req.params.id}%';
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