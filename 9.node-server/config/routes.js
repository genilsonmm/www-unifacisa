const express = require('express')
const router = express.Router();

const courseService = require('../services/courseService')
courseService(router);

module.exports = router;