const bookmodel= require("../models/bookmodel")

const createBookUser= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}

module.exports.createBookUser= createBookUser

const getBooksData= async function (req, res) {
    let allUsers= await bookmodel.find()
    res.send({msg: allUsers})
}
module.exports.getBooksData= getBooksData