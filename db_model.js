const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'homeworks-cluster-instance-1.cfchj75aj0uh.us-east-1.rds.amazonaws.com',
  database: 'HomeworksDB',
  password: 'password',
  port: 5432,
});

const getHomeworks = () => {
    console.log("hey0");
    return new Promise(function(resolve, reject) {
        console.log("hey1");
      pool.query('SELECT * FROM homeworks.homeworks', (error, results) => {
        if (error) {
          reject(error)
        }
        console.log("hey2");
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {getHomeworks};