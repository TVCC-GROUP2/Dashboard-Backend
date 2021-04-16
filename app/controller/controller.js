const db = require('../../config/db')
require('dotenv').config()
const GetLoginCount = async (req, res) => {
    try {
      var from = req.query.from; 
      var to = req.query.to; 

      sql=`select count(*) as count, month(last_user_login) as month, year(last_user_login) as year from attendees where last_user_login between '`+ from + `' AND '` + to + `' group by month(last_user_login), year(last_user_login)`

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };

  const GetAttendeeSession = async (req, res) => {
    try {
      var from = req.query.from; 
      var to = req.query.to; 

      sql=`select count(attendeeid) as count, month(date_pinged) as month, year(date_pinged) as year from attendee_session_tracking where date_pinged between '`+ from + `' AND '` + to + `' group by month(date_pinged), year(date_pinged)`

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  const GetEngagement = async (req, res) => {
    try {
      var limit = req.query.limit; 

      sql=`select count(*) as users, d.name, d.reference, c.conference_code, v.type from discussion_group d left join video_call_codes v on d.reference = v.code left join discussion_group_people dgp on d.id = dgp.groupid left join conferences c on d.conferenceid=c.id group by d.name, d.reference, c.conference_code, v.type order by users DESC limit ` + limit

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  const GetMessageDeliveryCount = async (req, res) => {
    try {
      var limit = req.query.limit; 

      sql=`select et.name as event_type, e.name, e.short_desc, e.start_time, e.end_time, e.event_reference, e.logo, count(*) as count from events e left join event_types et on e.event_type = et.id left join exhibitor_conversation ec on e.id=ec.exhibitor_id where event_reference is not null group by event_type, e.name, e.short_desc, e.start_time, e.end_time, e.event_reference, e.logo order by count DESC limit ` + limit      

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  const GetEventListByConversationCount = async (req, res) => {
    try {
      var limit = req.query.limit; 

      sql=`select et.name as event_type, e.name, e.description, e.short_desc, e.start_time, e.end_time, e.event_reference, e.logo, e.question_to_delegate_pre_count, e.question_to_delegate_during_count, e.question_to_delegate_after_count from events e left join event_types et on e.event_type=et.id  where event_reference is not null order by question_to_delegate_during_count DESC limit ` + limit      

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  const GetUserCount = async (req, res) => {
    try {
      var limit = req.query.limit; 
      sql='select count(a.organisation) as count, a.organisation from attendees a group by a.organisation order by count DESC limit ' + limit
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };

  const GetUserDetails = async (req, res) => {
    try {
      var limit = req.query.limit; 
      var skip = req.query.skip; 
      var usertype = req.query.usertype;
      sql=`select a.first_name, a.last_name, a.email, a.organisation, at.type_name from attendees a left join attendee_types at on a.typeid=at.id where a.typeid is not null and at.type_name='` + usertype + `' order by a.organisation DESC LIMIT ` + limit + ' OFFSET ' + skip
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };

  const GetStandAttendanceRate = async (req, res) => {
    try {
      var from = req.query.from; 
      var to = req.query.to; 

      sql=`select count(sa.attendeeid) as count, month(sa.date_visited) as month, year(sa.date_visited) as year, e.name from stand_attendance sa left join events e on sa.eventid=e.id where sa.date_visited between '`+ from + `' AND '` + to + `' group by month(sa.date_visited), year(sa.date_visited), e.name`

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return res.status(200).json(result);
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        data: err,
      });
    }
  };
  module.exports = {
    GetLoginCount,
    GetAttendeeSession,
    GetMessageDeliveryCount,
    GetEngagement,
    GetStandAttendanceRate,
    GetUserCount,
    GetEventListByConversationCount,
    GetUserDetails,
  };