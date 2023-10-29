import express from "express";
import cors from "cors";
import imageupload from "express-fileupload";
import sharp from "sharp";


const app = express();

const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use(imageupload());

app.get("/", (req, res) => {
  res.json({ message: "Backend is ready" });
});




app.post("/uploadimage", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server is running at the ${port}`);
});
