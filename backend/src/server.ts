import express = require("express");
import dotenv = require("dotenv");
import path = require("path");

const app = express();
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const PORT = process.env.PORT;

app.use(express.json());
app.use("/blogs/", require("./routes/blogPostRoutes"));

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
