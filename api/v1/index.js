var express = require('express');
var router = express.Router();
const {
    createPairedList,
    getPairedList,
    savePairedList,
} = require('../../lib/paired-list');

router.get('/', (req, res) => {
    res.send({ path: '/api/gift-exchange/v1' });
});

router.get('/list', (req, res, next) => {
    if (typeof req.query.listId === 'undefined')
        return res.status(400).json({ message: 'listId required' });
    next();
});

router.get('/list', (req, res) => {
    getPairedList(req.query.listId)
        .then(results =>
            res.status(200).json({
                pairs: results.pairs,
                list: results.originalList,
                id: results._id,
            })
        )
        .catch(err =>
            res
                .status(500)
                .json({ message: 'There was an error retrieving your list' })
        );
});

router.post('/list', (req, res, next) => {
    if (typeof req.body.names === 'undefined')
        return res.status(400).json({ message: 'names required' });
    next();
});

router.post('/list', (req, res) => {
    createPairedList(req.body.names)
        .then(results => savePairedList(results))
        .then(savedResults =>
            res.status(200).json({
                pairs: savedResults.pairs,
                list: savedResults.originalList,
                id: savedResults._id,
            })
        )
        .catch(err =>
            res
                .status(500)
                .json({ message: 'There was an error generating the list' })
        );
});

module.exports = router;
