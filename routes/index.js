const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/futbolistas', controllers.createFutbolista);
router.get('/futbolistas', controllers.getAllFutbolistas);

module.exports = router;
