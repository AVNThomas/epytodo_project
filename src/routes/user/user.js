exports.displayuser = (app, connection, req, res) => {
    connection.query('SELECT * FROM user', (err, rows, fields) => {
        res.send(rows);
    }
)}
