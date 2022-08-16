const { ClientModel } = require("../database");

module.exports = class ClientController {
  async addClient(body) {
    try {
      const newClient = await ClientModel.create(body);
      console.log(newClient);
      return { status: 200, response: newClient };
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        response: {
          message: error.message,
        },
      };
    }
  }
};
