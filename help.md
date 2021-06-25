#Ajuda

npm init -y             =>  Cria o projeto NPM

npm install ejs         =>  Instala o EJS

npm install express     =>  Instala o Express framework para aplicações WEB

npm install nodemon -D  =>  Instala o Nodemon para rodar o server sem precisar ficar restartando a cada atualização (-D para dizer que só é utilizado na produção)

npm install sqlite

npm install sqlite3



package.json >=
"scripts": {
    "start": "node src/server.js"
  },
  /* Script para iniciar server com npm start */

  npm run SCRIPT_NAME => Rodar script com nome diferente de start


"start": "nodemon src/server.js"
"start": "nodemon ."  
"nodemon ." == "main": "src/server.js",