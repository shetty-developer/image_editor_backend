const sharp = require("sharp");

const watermarkController = (req, res) => {
   
    const imageInput = req.files.imagefile.data;
    const contentType = req.files.imagefile.mimetype;

    const watermarkImage = req.files.imagefile.data;
    const watermarkImageType = req.files.imagefile.mimetype;
    
  
    sharp(imageInput)
    .composite([
      {
        input: watermarkImage,
        top: 50,
        left: 50,
      },
    ])
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

module.exports = watermarkController;