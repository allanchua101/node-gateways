var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/list", function(req, res, next) {
  res.json([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      firstName: "Sam",
      lastName: "Miller"
    },
    {
      id: 3,
      firstName: "Muhammed",
      lastName: "Ali"
    }
  ]);
});

module.exports = router;
