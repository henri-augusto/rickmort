const express = require('express');
const { getData } = require('../controllers/apiController');

const router = express.Router();

router.route('/').get(getData);

module.exports = router;
