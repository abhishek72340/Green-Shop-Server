const microgreens = require("../models/productsModel");

async function productsController(req, resp) {
  const regex = new RegExp(req.params.key, "i");
  microgreens
    .find({ $or: [{ name: regex }, { category: regex }] })
    .then((result) => {
      resp.status(200).json(result);
    });
}
module.exports = productsController;
