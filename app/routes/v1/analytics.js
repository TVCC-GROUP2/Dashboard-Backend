const express = require('express');

const api = express.Router();
const analytics = require('../../controller/controller');

api.get('/loginCount', analytics.GetLoginCount);

module.exports = api;