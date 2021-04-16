const express = require('express');

const router = express.Router();
const bodyparser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const compress = require('compression');
const methodOverride = require('method-override');

router.use(cors());
router.use(helmet());
router.use(morgan('combined'));
router.use(bodyparser.json());
// parse application/x-www-form-urlencoded
router.use(bodyparser.urlencoded({ extended: false }))

router.use(fileUpload());
// gzip compression
router.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
router.use(methodOverride());

module.exports = router;