const productRepository = require('../repositories/productRepository');

module.exports = class ProductController {
    
    static async createProduct(req, res){
            const newProduct = {

            }
            let product = await productRepository.createProduct(newProduct);
            res.json(product)
    }
}


