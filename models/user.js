const db = require("../connection");

const getUsers = async () => {
    const query = 'SELECT * FROM users';
    const { rows } = await db.query(query);
    return rows;
  };
  
  const getUsersid = async(id)=>{
    const query='SELECT * FROM ecomaccount where id=$1';
    const {rows} = await db.query(query,[id]);
    return rows[0]; 
  }
  const createUser = async ({ name, email, password }) => {
    try {
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, password];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Optionally re-throw the error
    }
  };

  module.exports = {
    getUsers,
    getUsersid,
    createUser,
    // Add other CRUD operations as needed
  };