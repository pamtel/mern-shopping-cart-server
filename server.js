require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


app.use("/api/products", productRoutes);

if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  app.use(morgan("short"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
