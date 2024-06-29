const User = require("../models/user");

async function handleCreateUserById (req,res){
    const body = req.body;
    if (!body || !body.user_name || !body.password) {
        return res.status(400).json({msg: 'all fields are required'})
    }
    const result = await User.create({
        UserName: body.user_name,
        Password: body.password,
    })
    return res.status(201).json({msg: "Success", id: result._id})
}

module.exports = {handleCreateUserById};