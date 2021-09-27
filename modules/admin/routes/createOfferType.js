const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { createOfferType: createOfferTypeRoute } } } = require("../../../constant/Constants");
const offerTypeController = require("../controllers/offerTypeController");

const validationBody = {
  type: "object",
  properties: {
    description: { type: "string" },
    minAmt: { type: "number" },
    maxDiscount: { type: "number" },
    name: { type: "string" },
    value: { type: "number" }
  },
  required: [ "description", "minAmt", "maxDiscount", "name", "value" ]
};

const createOfferType = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, validationBody );

  try {
    const response = await offerTypeController.insertOfferType( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create offerType: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( createOfferTypeRoute, createOfferType, { isPublic: true } );
