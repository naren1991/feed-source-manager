const feedSource = require('../controllers/feed-source.controller.js');

router = require('express').Router();
    
router.post('/create', feedSource.create);

router.get('/getAll', feedSource.getAll);

router.post('/search', feedSource.search);

router.put('/update/:sourceId', feedSource.update);

router.delete('/notes/:sourceId', feedSource.delete);

module.exports = router;