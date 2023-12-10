const express = require("express");
const cors = require("cors");
const imageupload = require("express-fileupload");
const sharp = require("sharp");
const routes = require("./routes/index");


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


//  app.get("/", (req, res) => {
//    res.json({ message: "Backend is ready" });
//  });


app.use("/api",routes);

app.listen(port, () => {
  console.log(`Server is running at the ${port}`);
});
