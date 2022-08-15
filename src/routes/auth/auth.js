const bcrypt = require('bcryptjs');

exports.register = function(req, res, connection, app) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    if (connection.query('SELECT * FROM user WHERE email = \'' + req.body.email + '\';', (err, rows, fields) => {
        if (rows == null) {
            connection.query('INSERT INTO user (email, password, name, firstname) VALUES (\'' + req.body.email + '\', \'' + hash + '\', \'' + req.body.name + '\', \'' + req.body.firstname + '\');', (err, rows, fields) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('user created');
                }
        })} else {
            res.json([{"msg": "Account already exists"}]);
        }
    }))
    ;
}

exports.login = function(req, res, connection, app) {
    connection.query('SELECT * FROM user WHERE email = \'' + req.body.email + '\';', (err, rows, fields) => {
    if (rows.length > 0) {
        if (bcrypt.compareSync(req.body.password, rows[0].password)) {
            res.json('user logged in');
        }
    } else {
        res.json({"msg": "Invalid Credentials"});
    }
    })
}