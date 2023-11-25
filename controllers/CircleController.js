const sharp = require("sharp");

const CircleController = (req, res) => {
  const imageInput = req.files.imagefile.data;
  const contentType = req.files.imagefile.mimetype;
  
};

module.exports = CircleController;
