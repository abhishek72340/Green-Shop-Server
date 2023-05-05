const express = require("express");
require("dotenv").config();
const cors = require("cors");
const productsRouter = require("./routes/products");
const contactRouter = require("./routes/contact");
const cartRouter = require("./routes/cart");
const usersRouter = require("./routes/users");

//  **Connection**
require("./database/mongoDB");


const app = express();
const PORT = process.env.PORT || 4000;

// **Instance**
app.use(cors());

// **Middileware**
app.use(express.json());

// // **Routes**
app.use("/", productsRouter);
app.use("/", contactRouter);
app.use("/", cartRouter);
app.use("/", usersRouter);

app.listen(PORT, () => console.log(`server started on ${PORT}`));
