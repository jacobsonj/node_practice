const {Router} = require('express');
const app = Router();
let users = [];

app.get('/user', (req,res) => res.json(users));

module.exports(app);