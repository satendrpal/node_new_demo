const User=require("../models/user");



const getUsers = async (req, res, next) => {
    try {
      const users = await User.getUsers(); // Correctly using getUsers function from User model
      res.json(users);
    } catch (err) {
      next(err);
    }
    
  };
  const getUsersid=async(req,res,next)=>{
  
    const userid = req.params.id;
   
    try{
        const id=await User.getUsersid(userid);
        if(!id){
            res.status(404).json("not data found");
        }
        res.json(id);
    }catch(err){
         next(err);
    }
   

  }

  const createUser = async (req, res) => {
    const  { name, email, password } = req.body; 
    try {
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
      }
      const newuser = await User.createUser({ name, email, password });
      res.status(201).json(newuser);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };
const update =async(req, res)=>{
  const {id}=req.params;
  const  { name, email, password, } = req.body; 
  try{
    const update=await User.update({ name, email, password,id });
    res.status(201).json(update);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};



  
  module.exports = {
    getUsers,
    getUsersid,
    createUser,
    update,
    // Add other controller functions as needed
  };
