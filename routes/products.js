import { Router } from "express";
import { addProduct, countProducts, deleteProduct, getProducts, updateProduct } from "../controllers/products.js";
import { localUpload,productPicturesUpload} from "../middlewares/uploads.js";
import { isAuthenticated } from "../middlewares/auth.js";
// create a product router
const productsRouter = Router();
//Check if user has permission will also be done with a middleware

// define routes

 // upload product image is done with local upload middleware
productsRouter.post(
    '/products',
    isAuthenticated,
    // productImageUpload.single('image'),
    productPicturesUpload.array('pictures', 3), 
    addProduct);

productsRouter.get('/products', getProducts);

productsRouter.get('/products/count', countProducts);

productsRouter.patch('/products/:id',isAuthenticated, updateProduct);

productsRouter.delete('/products/:id',isAuthenticated, deleteProduct);

// export Router
export default productsRouter;

