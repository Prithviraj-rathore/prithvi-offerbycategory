const route = require("../../../lib/route");
const GenricController = require("../genricController");
const Constants = require("../../../constant/Constants");

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
const healthHandler = async (req, res) => {
  const result = await GenricController.checkHealth();
  res.json(result);
};

module.exports = route.get(Constants.routes.status, healthHandler);
