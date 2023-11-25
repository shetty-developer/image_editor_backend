const express = require('express');

const router = express.Router(); 

//Controller

const resizeController = require("../controllers/ResizeController");
const watermarkController = require("../controllers/WatermarkController");
const blurController = require('../controllers/BlurController');
const ConvertGifFormatController = require("../controllers/ConvertGifFormat");
const ConvertJpegFormatController = require("../controllers/ConvertJpegFormat");
const ConvertPngFormatController = require("../controllers/ConvertPngFormat");
const WebpFormatController  = require("../controllers/WebpFormatController");
const SharpenController = require("../controllers/SharpenController");
const CircleController = require("../controllers/CircleController");
const compressJpegController = require("../controllers/CompressJpegController");
const compressGifController = require("../controllers/CompressGifController");
const CompressPngController = require("../controllers/CompressPngController");
const CompressWebpController = require("../controllers/CompressWebpController");
const CropController = require("../controllers/CropController");
const RotateController = require("../controllers/RotateController");



//routes

router.route("/blur").post(blurController);
router.route("/compressjpg").post(compressJpegController);
router.route("/compresspng").post(CompressPngController);
router.route("/resize").post(resizeController);
router.route("/watermark").post(watermarkController);
router.route("/jpegformat").post(ConvertJpegFormatController);
router.route("/pngformat").post(ConvertPngFormatController);
router.route("/gifformat").post(ConvertGifFormatController);
router.route("/webpformat").post(WebpFormatController);
router.route("/sharpen").post(SharpenController);
router.route("/circle").post(CircleController);
router.route("/compresswebp").post(CompressWebpController);
router.route("/compressgif").post(compressGifController);
router.route("/crop").post(CropController);
router.route("/rotate").post(RotateController);


module.exports = router;

