const express = require("express");
const router = express.Router();
const homecontroller=require('../controllers/user')

router.get('/api',homecontroller.getUsers);
router.get('/api/:id',homecontroller.getUsersid);
router.post('/api/createUser',homecontroller.createUser);
router.post('/api/update/:id',homecontroller.update);
module.exports = router;