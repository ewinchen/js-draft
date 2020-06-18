const sql = require('mssql');



  (async function () {
    try {
      let pool = await sql.connect({
        user: 'sa',
        password: 'sa',
        server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
        database: 'master',
      })
      let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select 1')
            
        console.dir(result1)



    } catch (err) {
      // ... error checks
    }
  })();

sql.on('error', err => {
  // ... error handler
})