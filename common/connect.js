
import mysql from "mysql";
import * as dotenv from 'dotenv'
dotenv.config()

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'banvexemphim'
});

connection.connect((err) => {
  if (err) {
    console.log("fail")
  }
  else {
    console.log("success")
  }
})

export default connection;