const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/Auth");
const productRoute = require("./Routes/Product");
const cartRoute = require("./Routes/Cart");
const orderRoute = require("./Routes/Order");
const stripeRoute = require("./Routes/Stripe");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("DB con successful");
  })
  .catch((er) => console.log(er));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/carts", cartRoute);
app.use("/api/Orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});
