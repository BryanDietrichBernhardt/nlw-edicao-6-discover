/* Script para iniciar DB */

const Database = require("./config")

const initDb = {
  async init() {  //para usar await na função, precisa do async
    const db = await Database() //await: espera rodar o Database() e retornar uma resposta para depois proseguir

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

initDb.init();