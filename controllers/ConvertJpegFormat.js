const sharp = require("sharp");

const ConvertJpegFormat = (req, res) => {
 
  const imageInput = req.files.imagefile.data;
  const contentType = req.files.imagefile.mimetype;

  sharp(imageInput)
    .jpeg({
      quality: 100,
      chromaSubsampling: "4:4:4",
    })
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

module.exports = ConvertJpegFormat;
