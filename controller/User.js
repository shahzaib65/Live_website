const user = require("../model/User");
var random_name = require('node-random-name');

const register = async(req,res)=>{
  try {
    console.log(random_name({ first: true, gender: "female" }));
    const data = await user.create({
        name: random_name({ first: true, gender: "female" })
    })
    if(data){
        return res.json({success: true, result: data});
    }
  } catch (error) {
    res.json({success: false, result: error.message})
  }

}

const getUsers = async(req,res)=>{
    try {
        
     const data = await user.find();
     res.json({success: true, result: data})
    } catch (error) {
        res.json({success: false, result: error.message})
    }
}

module.exports = {
    register,
    getUsers
}