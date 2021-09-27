const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { createMembership: createMembershipRoute } } } = require("../../../constant/Constants");
const membershipController = require("../controllers/membershipController");

const validationBody = {
  type: "object",
  properties: {
    code: { type: "number" },
    expiresOn: { type: "string", format: "date" },
    partnerId: { type: "number" }
  },
  required: [ "code", "expiresOn", "partnerId" ]
};

const createMembership = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, validationBody );

  try {
    const response = await membershipController.insertMembership( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create membership: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( createMembershipRoute, createMembership, { isPublic: true } );
