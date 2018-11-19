var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/list', function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "VueJS T-Shirt",
      price: 100
    },
    {
      id: 2,
      name: "Why ReactJS T-Shirt",
      price: 10
    },
    {
      id: 3,
      name: "Why Angular T-Shirt",
      price: 5
    }
  ])
});

module.exports = router;
