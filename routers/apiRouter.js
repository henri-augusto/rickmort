const express = require('express');
const { getData, getViewData } = require('../controllers/apiController');

const router = express.Router();

router.route('/').get(getData);
router.route('/index').get(getViewData);

module.exports = router;
