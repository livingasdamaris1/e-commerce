import { ProductModel } from "../models/product.js";

export const addProduct = async (req, res, next) => {
  try {
    //Check if user has permission
    // upload product image
    // validate product information
    // save Product information in database
    const result = await ProductModel.create(req.body)
     
    // return response
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async(req, res) => {
  try {
    // Fetch products from database
    const result = await ProductModel.find();
    // Return response
    res.json(result);
  } catch (error) {
    next(error)
  }
};

export const countProducts = (req, res) => {
  res.send("All Products count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} updated!`);
};

export const deleteProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} deleted!`);
};
