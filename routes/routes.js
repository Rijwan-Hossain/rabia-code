const express = require('express') 
const route = express.Router()

const { getRoot, getUser, login, singleUser } = require('../controller/controllers')

route.get('/', getRoot) 
route.get('/user', getUser) 
route.get('/user/:id', singleUser) 
route.post('/login', login) 

module.exports = route; 


// domain/api/v1/post        POST 
// domain/api/v1/post        GET 
// domain/api/v1/post/:id    GET 
// domain/api/v1/post/:id    DELETE
// domain/api/v1/post/:id    PUT / PATCH 

