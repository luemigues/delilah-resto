const bodyParser = require('body-parser');

module.exports = class Middlewares {

    static bodyParser (req, res, next){
    bodyparser.json()
    next()
    }
    
}