const express = require("express");
const app = express();
let port = 3000;
let path = require("path");
const multer = require("multer");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const mstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/files"); 
  filename: (req, file, cb) => {
    console.log(file); 
    const ext = file.mimetype.split("/")[1]; // Extract file extension

    // CORRECTION: Changed file.originalName to file.originalname (correct property)
    cb(null, Date.now() + file.originalname + "." + ext); // Append timestamp to the original filename
  }
});

// File filter to only accept certain file types
const filter = (req, file, cb) => {
  const ext = file.mimetype.split("/")[1];

  // CORRECTION: Updated the filter to also accept 'png' in addition to 'jpeg'
  if (ext === "jpeg" || ext === "png") {
    cb(null, true); // Accept the file if it's jpeg or png
  } else {
    cb(new Error("File not supported"), false); 
  }
};


const upload = multer({
  storage: mstorage,
  fileFilter: filter,

  limits: {
    fileSize: 1024 * 1024 * 10 
  }
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "upload.html"));
});


app.post("/uploadFile", upload.array('myfiles', 10), (req, res) => {
  res.send("Files uploaded successfully");
});


app.listen(port, (err) => {
  if (err) {
    console.log("An error occurred while starting the server");
  } else {
    console.log(`Server is running at port ${port}`);
  }
});
