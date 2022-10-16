const { connect } = require('http2');
const pool = require('./db')

module.exports = function routes(app, logger) {
    app.get('/auth', (req, res) => {
        var email = req.param("email");
        var password = req.param("password");
        // obtain connection from pool of connection
        pool.getConnection(async function (err, connection) {
            if (err) {
                // if error when obtaining connection
                // release connection instance and log error
                logger.error('Problem obtaining MySQL conntection', err)
                res.status(400).send('Problem obtaining MySQL connection');
            } else {
                // if no issue, execute query and release connection
                await connection.query('SELECT email, password FROM ta_management.users t WHERE email = ? AND password = ?', [email, password], function (err, rows, fields) {
                    connection.release();
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "Error obtaining values"
                        })
                    } else {
                        // if no match to credentials
                        if(rows.length == 0){
                            res.status(200).json({
                                "error": "Invalid credentials"
                            });
                        }
                        else if(rows.length == 1){
                            res.status(200).json({
                                "data": rows[0]
                            })
                        }
                    }
                })
            }
        })
    })
}