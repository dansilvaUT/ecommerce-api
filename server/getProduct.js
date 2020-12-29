const products = require('../products.json');

const getProduct = (req, res) => {
    let product = products.find(e => e.id === + req.params.id);
    if (product) {
        res.status(200).send(product);
    } else {
        return res.status(500).send('Item not in list');
    }
}

module.exports = getProduct; 