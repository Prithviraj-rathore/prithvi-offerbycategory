const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { partner: partnerRoute } } } = require("../../../constant/Constants");
const partnerController = require("../controllers/partnerController");

const updateRequest = {
  type: "object",
  properties: {
    description: { type: "string" },
    email: { type: "string" },
    isEmirateIdReq: { type: "boolean" },
    name: { type: "string" }
  },
  required: [ "description", "email", "name" ]
};

const updatePartner = async ( req, res ) => {
    //TODO: Check validation
    validate( req.body, updateRequest );
    const partnerId = Number(req.params.id);
    if( Number.isNaN( partnerId ) || partnerRoute === 0 ) {
      return res.send("Partner id is invalid");
    }

    try {
      const data = await partnerController.updatePartner( partnerId, req.body );
      res.json({ id: data });
    } catch (error) {
      console.error("Error occurred trying to update partner: " + error.message );
      res.send( { error: error.message } );
    }
};

module.exports = route.put( `${partnerRoute}/:id`, updatePartner, { isPublic: true } );
