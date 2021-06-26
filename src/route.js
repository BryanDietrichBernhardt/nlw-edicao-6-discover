const express = require('express') //importa o express
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()  //routs guarda as funcionalidades de rotas do express

route.get('/', (req, res) => res.render('index', { page: 'enter-room' })) //responder com arquivo index.html

//Exemplo em site com host
/*
routs.get('/contact', (req, res) => {
  res.render("contatos") //responder com arquivo contatos.html
})
*/


//req = requisição da rota
//res = resposta

route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
//Formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)  //:variável

module.exports = route //exportar route