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
      url: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195796/shirt-1490420513-abd7b25b157f3450ce8c2a09ee51c36e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTI3MC41NzE0Mjg1NzE0Mjg0XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvY2F0ZWdvcmllcy9tZW5zL3NpemVzLyovc3R5bGVzL3RyaWJsZW5kLXRlZS9jb2xvcnMvKi9mcm9udC5wbmciXSwgeyJ5IjogNDcwLCAieCI6IDU1OSwgImJhY2tncm91bmQiOiAiMTgxODE4In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
      quantity: 5,
      priceAtTimeOfSale: 75
    }, 
    {
      id: 2,
      customerID: 1,
      productID: 2,
      productName: "ReactJS T-Shirt",
      url: "https://images-na.ssl-images-amazon.com/images/I/41JCkr8zAPL.jpg",
      quantity: 10,
      priceAtTimeOfSale: 100
    }, 
    {
      id: 3,
      customerID: 2,
      productID: 3,
      productName: "Angular T-Shirt",
      url: "https://ae01.alicdn.com/kf/HTB1h3zVcOjQBKNjSZFnq6y_DpXaS/Funny-Male-Tee-Shirts-AngularJS-T-Shirt-Man-JavaScript-Programmer-Cool-T-Shirts-100-Cotton-2018.jpg",
      quantity: 5,
      priceAtTimeOfSale: 5
    }
  ]);
});

module.exports = router;
