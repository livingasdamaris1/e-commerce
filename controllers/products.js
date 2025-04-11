import { ProductModel } from "../models/product.js";
import { addProductValidator } from "../validators/products.js";

export const addProduct = async (req, res, next) => {
  try {
    
    console.log(req.body);
    // validate product information
    const { error, value } = addProductValidator.validate({
      ...req.body,
      // image: req.file?.filename,
      pictures: req.files?.map((file) => {
        return file.filename
      }),
    }, {abortEarly:false});
    if (error) {
      return res.status(422).json(error)
    }
    // save Product information in database
    const result = await ProductModel.create(value); 
    // return response
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async(req, res) => {
  try {
    const {filter = "{}", sort = "{}" } = req.query;
    // Fetch products from database
    const result = await ProductModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort));
    // Return response
    res.json(result);
  } catch (error) {
    next(error)
  }
};

export const countProducts = (req, res) => {
  res.send("All Products count!");
};

export const updateProduct = async (req, res, next) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
  
    }
    res.status(201).json(result`Product with id ${result.title} updated!`);
  }
  catch (error) {
    next(error);
  }
};

  export const deleteProduct = (req, res) => {
    res.send(`Product with id ${req.params.id} deleted!`);
  }

