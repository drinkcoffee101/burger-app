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
    burger.insertOne('burger_name', req.body.burger_name, (result) => {
        res.json(true);
    });
});

router.put('api/burgers/:id', (req, res) => {
    let id = req.params.id;

    burger.updateOne()
})