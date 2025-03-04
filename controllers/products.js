export const addProduct = (req, res) => {
  //Check if user has permission
  // upload product image
  // validate product information
    // save Product information in database
    
    
  // return response
  res.json(req.body);
};

export const getProducts = (req, res) => {
  res.send("All products!");
};

export const countProducts = (req, res) => {
  res.send("All Products count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} updated!`);
};

export const deleteProduct = (req, res) => {
  res.send(`Product with id ${req.params.id}deleted!`);
};
