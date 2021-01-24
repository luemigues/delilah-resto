const productModel = require('../models/productModel.js');

module.exports = class ProductRepository{

    static createProduct(product){
        return productModel.create(product,{ fields: [] });
    }
}
