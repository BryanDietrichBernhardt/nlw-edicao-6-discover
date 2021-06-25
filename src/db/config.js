const sqlite3 = require("sqlite3")  //importa sqlite3
const { open } = require("sqlite")  //importa "open" do sqlite

module.exports = () =>
  open({
    filename: './src/db/rocketq.sqlite', //caminho até o arquivo db
    driver: sqlite3.Database
  })