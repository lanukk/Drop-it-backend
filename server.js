require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

//COrs
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

//Template Engine
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
