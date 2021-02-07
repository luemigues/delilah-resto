const ProductModel = require('../models/productModel.js');

module.exports = class ProductRepository{

    static async createProduct(product){
        const newProduct = await ProductModel.create(product,{fields: ['name', 'price', 'img_url']});
          return await ProductModel.findByPk(newProduct.id)
      }
  
      static async getProducts(){
          return await ProductModel.findAll()
      }
  
      static async getProduct(id){
          return await ProductModel.findByPk(id)
      }
  
      static async updateProduct(id, productUpdate){
          await ProductModel.update(productUpdate, { where: { id: id } })
          const updatedProduct = await ProductModel.findByPk(id)
          return updatedProduct;
      }
  
      static async deleteProduct(id){
          const deletedProduct = await ProductModel.findByPk(id);
            await ProductModel.destroy({
            where: {
              id: id
            }
          });
          return deletedProduct;
      }
}
