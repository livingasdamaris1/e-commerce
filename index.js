import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";

// Make database connection /1,specify username and password/ 2, specify database name after mongodb.net/

await mongoose.connect(process.env.MONGO_URI);

//create an express app
const app = express();

// Use global middlewares
app.use(express.json());

// Use routes
app.use(productsRouter);

//listen for incoming requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
