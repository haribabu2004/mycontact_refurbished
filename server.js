const express = require("express");
const connectDB = require("./Config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts/", require("./routes/contactRoutes"));
app.use("/api/user/", require("./routes/userRoutes"));
const errorHandle = require("./Middleware/handleError");
app.use(errorHandle);

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
