var express = require('express');
var router = express.Router();

/* GET transactions. */
router.get('/list', function(req, res, next) {
  res.json([
    {
      id: 1,
      customerID: 1,
      // Context independence
      productID: 1,
      productName: "VueJS T-Shirt",
      quantity: 5,
      priceAtTimeOfSale: 75
    }, 
    {
      id: 2,
      customerID: 1,
      productID: 1,
      productName: "VueJS T-Shirt",
      quantity: 10,
      priceAtTimeOfSale: 100
    }
  ]);
});

module.exports = router;
