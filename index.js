const express = require('express');
const PORT = 8080;
const cors = require('cors')
const bodyParser = require('body-parser');
const { Router } = require('express');
const Mountain = require('./mountain');
const User = require('./user');

const app = Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/mountain', Mountain);
app.use('/user', User);









app.listen(PORT, () => console.log("Server is listening on port %s", PORT));