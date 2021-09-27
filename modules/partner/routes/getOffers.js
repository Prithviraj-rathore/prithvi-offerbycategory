const route = require("../../../lib/route");
const partnerController = require("../partnerController");
const validate = require("../../../lib/validate");
const Constants = require("../../../constant/Constants");

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const validationQuery = {
  type: "object",
  properties: {
    categoryId: { type: "string" },
  },
  required: ["categoryId"]
};


const offerHandler = async (req, res) => {
  // eslint-disable-next-line no-useless-catch
  try{

    validate(req.query, validationQuery);
    const result = await partnerController.getOffers(req.query);
    res.json(result);
  }
  catch(err){
    throw err;
  }

};

module.exports = route.get(Constants.routes.partner.getOffers, offerHandler, { isPublic: true });
