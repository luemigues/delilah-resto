const orderRepository = require('../repositories/orderRepository');
const productModel = require('../models/productModel');
const { verifyToken } = require('../auth/auth.js');

async function getOrderDescription(products){
    let description = '';
    
    for(i=0; i < products.length; i++){
        const {amount, product_id} = products[i];
        const product = await productModel.findByPk(product_id, {fields: ['name']});
        description += ` ${amount}x${product.name}`;
        console.log(description)
    }
    return description
};

async function getTotalAmount(products){
    let totalAmount = null;

    for(i=0; i < products.length; i++){
        const {amount, product_id} = products[i];
        const product = await productModel.findByPk(product_id, {fields: ['price']});
        totalAmount += amount * product.price;
    }

    return totalAmount

}

module.exports = class OrderController {
    
    static async createOrder(req, res){
        const {
            products,
            payment_method,
            } = req.body;

        if(products && payment_method){
            try{
                const token = req.headers.authorization;
                const verifiedUser = verifyToken(token);
                const { userId } = verifiedUser;

                if(userId){
                    console.log(userId)
                    const description = await getOrderDescription(products);
                    const payment_amount = await getTotalAmount(products);

                    const newOrder = {
                        user_id: userId,
                        status: 'new',
                        time: new Date(),
                        description: description,
                        payment_amount: payment_amount,
                        payment_method: payment_method
                    }

                    console.log(newOrder)
                    
                    let order = await orderRepository.createOrder(newOrder, products);
                    res.status(201).json(order)
                 
                }else{
                    res.status(406).json('Unathorized - Please signin')
                }


            }catch(err){
                res.status(500).json('Server Error')
                console.log(err)
            }
        }else{
            res.status(400).json("Missing information");
        }
    }

    static async getOrders(req, res){
        try{
            let orders = await orderRepository.getOrders()
            res.json(orders)

        }catch(err){
            res.status(500).json('Server Error')
                console.log(err)
        }
    }

    static async getOrder(req, res){
        try{
            let orderId = req.params.id
            let order = await orderRepository.getOrder(orderId)
            res.json(order)

        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async updateOrder(req, res){
        try{
            let orderId = req.params.id

            const {
                status, 
                payment_method,
                payment_amount,
                description
                } = req.body;

            if(status || payment_amount || payment_method || description){
                let orderUpdate = req.body
                let order = await orderRepository.updateOrder(orderId, orderUpdate)
                res.status(200).json(order)
            }else{
                res.status(400).json("Missing information");
            }
        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async deleteOrder(req, res){
        try{
            let orderId = req.params.id
            let order = await orderRepository.deleteOrder(orderId)
            res.json(order)
            res.status(204)

        }catch(err){
            res.status(500).json('Server Error')
             console.log(err)
        }
    }
}



