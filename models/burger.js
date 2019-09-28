const orm = require('../config/orm.js')

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (col, val, cb) => {
        orm.insertOne('burgers', col, val, (res) =>{
            cb(res);
        });
    },
    //expecting val to be a boolean 
    updateOne: (col, val, id, cb) => {
        orm.updateOne('burgers', col, val, id, (res) =>{
            cb(res);
        })
    }
}

// Export the database functions for the controller
module.exports = burger;