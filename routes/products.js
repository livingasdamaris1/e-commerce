import { Router } from "express";
import { addProduct, countProducts, deleteProduct, getProducts, updateProduct } from "../controllers/products.js";
import { localUpload, remoteUpload } from "../middlewares/uploads.js";
// create a product router
const productsRouter = Router();
//Check if user has permission will also be done with a middleware

// define routes

 // upload product image is done with local upload middleware
productsRouter.post('/products', remoteUpload.single('image'), addProduct);

productsRouter.get('/products', getProducts);

productsRouter.get('/products/count', countProducts);

productsRouter.patch('/products/:id', updateProduct);

productsRouter.delete('/products/:id', deleteProduct);

// export Router
export default productsRouter;

