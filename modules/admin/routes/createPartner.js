const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { partner: partnerRoute } } } = require("../../../constant/Constants");
const partnerController = require("../controllers/partnerController");

const createRequest = {
  type: "object",
  properties: {
    description: { type: "string" },
    email: { format: "email", type: "string" },
    isEmirateIdReq: { type: "boolean" },
    name: { type: "string" }
  },
  required: [ "description", "email", "name" ]
};

const createPartner = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, createRequest );

  try {
    const response = await partnerController.insertPartner( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create partner: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( partnerRoute, createPartner, { isPublic: true } );
