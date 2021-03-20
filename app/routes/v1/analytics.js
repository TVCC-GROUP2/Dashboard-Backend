const express = require('express');

const api = express.Router();
const analytics = require('../../controller/controller');

api.get('/login-count', analytics.GetLoginCount);

api.get('/event-count', analytics.GetAttendeeSession);

api.get('/message-count', analytics.GetMessageDeliveryCount);

api.get('/discussion-count', analytics.GetEngagement);

api.get('/event-list', analytics.GetEventListByConversationCount);

api.get('/user-count', analytics.GetUserCount);

api.get('/user-list', analytics.GetUserDetails);

api.get('/stand-count', analytics.GetStandAttendanceRate);



module.exports = api;