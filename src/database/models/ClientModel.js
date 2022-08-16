const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ClientSchema = mongoose.Schema({
  name: { type: String },
  phone: { type: String, required: true },
  clientQuestion: { type: String },
});
ClientSchema.plugin(mongoosePaginate);
const ClientModel = mongoose.model("Client", ClientSchema);
exports.ClientModel = ClientModel;
