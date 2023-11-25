const sharp = require("sharp");

const WebpFormatController = (req, res) => {
  const imageInput = req.files.imagefile.data;
  const contentType = req.files.imagefile.mimetype;

  sharp(imageInput)
    .webp({ lossless: true })
    .toBuffer()
    .then((data) => {
      const base64Data = data.toString("base64");
      res.status(200).json({
        b64Data: base64Data,
        contentType: contentType,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = WebpFormatController;
