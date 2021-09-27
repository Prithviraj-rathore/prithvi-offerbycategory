const route = require("../../../lib/route");
const partnerController = require("../partnerController");
const Constants = require("../../../constant/Constants");

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const partnerHandler = async (req, res) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await partnerController.getPartners();
    res.json(result);
  }
  catch (err) {
    throw err;
  }

};

module.exports = route.get(Constants.routes.partner.getPartners, partnerHandler, { isPublic: true });
