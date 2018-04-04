const express = require('express');
const router = express.Router();


router.use(require('./auth'));
router.use(require('./api'));

module.exports = router;