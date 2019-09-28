var express = require("express");
// invoke the Router() object from express so that we can declare our routes
var router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(data);

        res.render('index', hbsObject);
    })
})

router.post('/api/burgers', (req, res) => {
    burger.insertOne('burger_name', req.body.name, (result) => {
        res.json(true);
    });
});

router.put('/api/burgers', (req, res) => {
    let id = req.body.id;
    //updateOne: (col, val, id, cb) 
    burger.updateOne('devoured', req.body.devoured, id, (result) => {
        if (res.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
})

// Export routes for server.js to use.
module.exports = router;
