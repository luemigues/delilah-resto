const productRepository = require('../repositories/productRepository');

module.exports = class ProductController {
    
    static async createProduct(req, res){
        const {
            name,
            price,
            img_url,
            } = req.body;

        if(name && price && img_url){
            try{
                const newProduct = {
                    name: name,
                    price: price,
                    img_url: img_url,
                }

                let product = await productRepository.createProduct(newProduct);
                res.status(201).json(product)

            }catch(err){
                res.status(500).json('Server Error')
                console.log(err)
            }
        }else{
            res.status(400).json("Missing information");
        }
    }

    static async getProducts(req, res){
        try{
            let products = await productRepository.getProducts()
            res.json(products)

        }catch(err){
            res.status(500).json('Server Error')
                console.log(err)
        }
    }

    static async getProduct(req, res){
        try{
            let productId = req.params.id
            let product = await productRepository.getProduct(productId)
            res.json(product)

        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async updateProduct(req, res){
        try{
            let productId = req.params.id

            const {
                name,
                price,
                img_url,
                } = req.body;

            if(name || price || img_url){
                let productUpdate = req.body
                let product = await productRepository.updateProduct(productId, productUpdate)
                res.status(200).json(product)
            }else{
                res.status(400).json("Missing information");
            }
        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async deleteProduct(req, res){
        try{
            let productId = req.params.id
            let product = await productRepository.deleteProduct(productId)
            res.json(product)
            res.status(204)

        }catch(err){
            res.status(500).json('Server Error')
             console.log(err)
        }
    }
}


