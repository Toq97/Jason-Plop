/**
 * constant that takes the express modules
 * @type {[modules]}
 */
const express = require('express');
/**
 * define a router
 * @type {[Router]}
 */
const router = express.Router();
/**
 * taking fs modules
 * @type {[type]}
 */
const fs = require('fs');
/**
 * using router to register different well routes
 */
//insert '/' because /json is insert in app
//second method is a handler
router.get('/', (req, res, next) => {
    res.header('Content-Type', 'Application/Json');
    fs.readFile('./data/luke.json', function(err, data) {
        if (err) {
            console.log('file read error', err); // gestire l'errore
        }
        res.status(200).json({
            message: 'handling Get request to /json',
            getJson : JSON.parse(data)
        });
    });
});

router.post('/', (req, res, next) => {
    const jsonData = {
        name: req.body.name
    };
    res.status(200).json({
        message: 'handling POST request to /json',
        createdJson: jsonData
    });
});

/**
 * get with a specific id
 */
router.get('/:jsonId', (req, res, next) => {
    const id = req.params.jsonId;
    if (id === 'special'){
        res.status(200).json({
            message: 'special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'general id'
        });
    }
});
/**
 * update a specific Id
 */
router.patch('/:jsonId', (req, res, next) => {
    res.status(200).json({
        message: 'update!'
    });
});
router.delete('/:jsonId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted!'
    });
});
// export to module the routers
module.exports = router;
