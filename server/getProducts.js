const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        let filteredProducts = products.filter(e => (
            e.price >= parseInt(req.query.price)
        ))
        return res.status(200).send(filteredProducts);
    } else {
        res.status(200).send(products);
    }

};

module.exports = getProducts;