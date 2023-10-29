const express = require('express');

const router = express.Router(); 

//Controller imports
import BlurController from "../controllers/BlurController";
import compressController from "../controllers/CompressController";
import convertFormatController from "../controllers/ConvertformatController";
import removeBgController from "../controllers/RemovebgController";
import resizeController from "../controllers/ResizeController";
import watermarkController from "../controllers/WatermarkController";


//routes
router.post("/blur",BlurController)
router.post("/compress",compressController);
router.post("/convertformat",convertFormatController);
router.post("/rmbg",removeBgController);
router.post("/resize",resizeController);
router.post("/watermark",watermarkController);

module.exports = router;