const db = require("../connection");

const getUsers = async () => {
    const query = 'SELECT * FROM rough';
    const { rows } = await db.query(query);
    return rows;
  };
  
  const getUsersid = async(id)=>{
    const query='SELECT * FROM rough where id=$1';
    const {rows} = await db.query(query,[id]);
    return rows[0]; 
  }
  const createUser = async ({ name, email, password }) => {
    try {
      const query = 'INSERT INTO rough (name, email, password) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, password];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Optionally re-throw the error
    }
  };

  const update = async ({id, name, email, password}) => {
    try {
      const query='update rough set name=$1,email=$2,password=$3 where id=$4 RETURNING *'
      const val= [name,email,password, id];
      const { rows }=await db.query(query,val);
      return rows[0];

    }catch(error){
      console.error('Error creating user:', error);
      throw error; // Optionally re-throw the error
    }
  }

  module.exports = {
    getUsers,
    getUsersid,
    createUser,
    update,
    // Add other CRUD operations as needed
  };