const  Product = require("../models/product.model")

/* name, price, image, description, brand, stock */
// http://localhost:3005/products/create
// const createProduct = async ( name, price, description, brand ) => {
//     try {
//         const product = await Product.create({ name, price, description, brand});
// s
//         return product;
//     } catch (error) {
//         console.log(error)
//     }

// };
const createProduct = async (name, price, description, brand) => {
    try {
      const product = await Product.create({ name, price, description, brand });
      console.log("Product created successfully:", product);
      return product;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };


const getAllProducts = async () => {
    const products = await Product.find();
    // if(!products.length){
    //     return insertProduct(products)
    // };
    return products
}


module.exports ={ createProduct, getAllProducts };