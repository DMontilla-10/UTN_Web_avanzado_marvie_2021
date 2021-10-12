const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dev',
  port: 8889
})

mysqlConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor conectado a MySQL')
  }
})

module.exports = mysqlConnection