const express = require("express");
const cors = require("cors");
const { connection } = require("./database");
const { productRoute } = require("./routes/productRoute");
const { cartRoute } = require("./routes/cartRoute");
const { wishlistRoute } = require("./routes/wishlistRoute");
const { authRoute } = require("./routes/auth.Route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/wishlist", wishlistRoute);
app.use("/auth", authRoute);

app.listen(4000, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server Running at ${4000} Port`);
});
