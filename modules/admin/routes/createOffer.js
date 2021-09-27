const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { createOffer: createOfferRoute } } } = require("../../../constant/Constants");
const offerController = require("../controllers/offerController");

const validationBody = {
  type: "object",
  properties: {
    categoryId: { type: "number" },
    description: { type: "string" },
    endDate: { format: "date", type: "string" },
    merchantId: { type: "number" },
    name: { type: "string" },
    offerTypeId: { type: "number" },
    perUserLimit: { type: "number" },
    pointsEquivalent: { type: "number" },
    quantity: { type: "number" },
    startDate: { format: "date", type: "string" },
  },
  required: [ "categoryId", "description", "endDate", "merchantId", "name", "offerTypeId", "perUserLimit", "pointsEquivalent", "quantity", "startDate" ]
};

const createOffer = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, validationBody );

  try {
    const response = await offerController.insertOffer( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create offer: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( createOfferRoute, createOffer, { isPublic: true } );
