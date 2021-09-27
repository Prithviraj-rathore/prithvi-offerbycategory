const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { createMerchant: createMerchantRoute } } } = require("../../../constant/Constants");
const merchantController = require("../controllers/merchantController");

const validationBody = {
  type: "object",
  properties: {
    categoryId: { type: "number" },
    description: { type: "string" },
    name: { type: "string" }
  },
  required: [ "categoryId", "description", "name" ]
};

const createMerchant = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, validationBody );

  try {
    const response = await merchantController.insertMerchant( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create merchant: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( createMerchantRoute, createMerchant, { isPublic: true } );
