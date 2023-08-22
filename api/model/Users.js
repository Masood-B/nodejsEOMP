const db = require('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser')

class Users{
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    login(req, res){
        const {emailAdd, userPass} = req.body
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}'
        `
        db.query(query, async(err, result)=>{
            if (err) throw err
            if(!result?.length){
                res.json({

                    status: res.statusCode,
                    msg: "Wrong email was placed"
                })
            }else{
                await compare(userPass, result[0].userPass,
                    (pErr, pResult)=>{
                        if (pErr) throw pErr
                        const token = createToken({
                            emailAdd, userPass
                        })
                        if(pResult){
                            res.json({
                                msg: "Logged In",
                                token,
                                result: result[0]
                            })
                        }else{
                            res.json({
                                stastus: res.statusCode,
                                msg: "Invaild password"
                            })
                        }
                    })
            }
        })
    }
    async register(req, res){
        const data = req.body
        data.userPass = await hash(data.userPass, 15)
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        const query = `
        INSERT INTO Users
        SET ?;
        `
        db.query(query, [data],(err)=>{
            if (err) throw err
            let token = createToken(user)
            res.json({
                status: res.statusCode,
                msg: "You are registered."
            })
        })
    }
    updateUser(req, res){
        const data = req.body
        if(data.userPass){
            data.userPass = hashSync(data.userPass, 15)
        }
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `
        db.query(query, [data, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user recording has been updated"
                })
            })
    }
    deleteUser(req, res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user recording has been removed"
            })
        })
    }
}

module.exports = Users