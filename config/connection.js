var mysql = require("mysql");
var sequelize = require("sequelize");
//local//
//var connection = mysql.createConnection({
  // host: "localhost",
   //port: 3306,
   //user: "root",
   //password: "password",
   //database: "burgers_db"
 //});

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;
