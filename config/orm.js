const connection = require('./connection.js');

// Object for all our SQL statement functions.
var orm = {
    selectAll: (tableInput, cb) => {
        connection.query(`SELECT * from ${tableInput}`, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: (table, col, val, cb) => {
        connection.query(`INSERT INTO ${table} (${col}) VALUES ('${val}')`, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    //expecting val to be a boolean 
    updateOne: (table, col, val, id, cb) => {
        connection.query(`UPDATE ${table} SET ${col} = ${val} WHERE id=${id}`, (err, res) => {
            if (err) {
                throw err;
            }
            cd(res);
        })
    }
}

// Export the orm object for the model
module.exports = orm;