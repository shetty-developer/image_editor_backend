const sharp = require("sharp");

const compressController = (req, res) => {
    console.log(req.files);
    console.log(req.files.imagefile);
    const imageInput = req.files.imagefile.data;
    const contentType = req.files.imagefile.mimetype;
  
    sharp(imageInput)
      .resize(512, 512)
      .png()
      .toBuffer()
      .then((data) => {
        const base64Data = data.toString("base64");
        res.status(202).json({
          b64Data: base64Data,
          contentType: contentType,
        });
      })
      .catch((err) => console.log(err));
};

module.exports = compressController;