const express = require("express");
const cors = require("cors");
const { connection } = require("./databast");
const { productRoute } = require("./routes/productRoute");
const { cartRoute } = require("./routes/cartRoute");

const app = express();
app.use(cors());

app.use("/product",productRoute)
app.use("/cart",cartRoute)

app.listen(4000, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server Running at ${4000} Port`);
});
