const express = require('express');

const router = express.Router(); 

//Controller imports
const BlurController = require( "../controllers/BlurController");
const compressController =require("../controllers/CompressController");
const convertFormatController = require("../controllers/ConvertformatController");
const removeBgController = require( "../controllers/RemovebgController");
const resizeController = require("../controllers/ResizeController");
const watermarkController = require("../controllers/WatermarkController");
const blurController = require('../controllers/BlurController');


//routes

router.route("/blur").post(blurController);
router.route("/compress").post(compressController);
router.route("/convertformat").post(convertFormatController);
router.route("/rmbg").post(removeBgController);
router.route("/resize").post(resizeController);
router.route("/watermark").post(watermarkController);

module.exports = router;

