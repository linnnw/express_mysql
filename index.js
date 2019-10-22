const express = require('express')

const app = express()

var mysql = require('mysql');

let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'	//数据库名
};

let pool = mysql.createPool(config);


let sql = 'select * from user'		//查询user表的所有数据



app.get('/about', function (req, res) {

    pool.getConnection((err, connection) => {
        if (err) {
            console.error(err)
        } else {
            connection.query(sql, (err, rows) => {
                if (err) {
                    console.error(err)
                } else {
                    res.send(rows)
                }
                connection.release()
            })
        }
    })
});





app.listen(8080, () => {
    console.log('http://localhost:8080');
})
