const Database = require('../db/config')

module.exports = {
  async index(req, res) {
    const db = await Database()
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password

    /* Verificar se a senha está correta */
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`) //busca pelo id
    if (verifyRoom.pass == password) {  //verifica se a senha é igual no db
      if (action == "delete") {

        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)  //apaga na tabela a questão que o id é igual o questionId passado

      } else if (action == "check") {

        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)  //altera na tabela o campo read para 1 na questão que o id é igual o questionId passado

      }
      res.redirect(`/room/${roomId}`)
    } else {
      res.render('passincorrect', { roomId: roomId })
    }


  },

  async create(req, res) {
    const db = await Database()
    const question = req.body.question
    const roomId = req.params.room

    await db.run(`INSERT INTO questions(
      title,
      room,
      read
    )VALUES(
      "${question}",
      ${roomId},
      0
    )`) //Text precisa estar entre aspas: "${question}"

    res.redirect(`/room/${roomId}`)
  }
}