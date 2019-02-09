const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 200,
        games: [
            {
                id: 1,
                title: 'ratata',
                players: 1
            }
        ]
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        status: 200
    });
});

module.exports = router;