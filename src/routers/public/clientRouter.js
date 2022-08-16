const express = require("express");
const { ClientController } = require("../../controllers");
const router = express.Router();
const clientController = new ClientController();
// const parseFormData = require("../../helpers");
// const formidable = require("formidable");

// const parseFormData = (request) => {
//   const form = formidable({ multiples: true });
//   form.parse(request, (err, fields, files) => {
//     return { ...fields, ...files };
//   });
//   return "test";
// };
router.get("/", async (req, res) => {
  return res.status(200).send("It is work@!!!!!");
});
router.post("/add_client", async (req, res) => {
  // const body = parseFormData(req);
  console.log("body", req.body);
  // const { status, response } = await clientController.addClient(body);
  return res.send("response");
});

module.exports = router;
