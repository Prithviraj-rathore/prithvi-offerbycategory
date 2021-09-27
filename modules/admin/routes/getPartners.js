const route = require("../../../lib/route");
const { routes: { admin: { partner: partnerRoute } } } = require("../../../constant/Constants");
const partnerController = require("../controllers/partnerController");

const getPartners = async ( req, res ) => {
    //TODO: Check validation?
  
    try {
      const response = await partnerController.getPartners( );
      res.json({ data: response });
    } catch (error) {
      console.error("Error occurred trying to get partners: " + error.message );
      res.json( { succes: false, error: error.message } );
    }
};

module.exports = route.get( partnerRoute, getPartners, { isPublic: true } );
