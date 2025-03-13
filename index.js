import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";
import cors from "cors";

// Make database connection /1,specify username and password/ 2, specify database name after mongodb.net/

await mongoose.connect(process.env.MONGO_URI);

//create an express app
const app = express();

// Use global middlewares
app.use(express.json());

app.use(cors)

// Use routes
app.use(productsRouter);

//listen for incoming requests
const port = process.env.PORT || 3000
app.listen(3000, () => {
  console.log(`Server is listening on port ${port}`);
});
