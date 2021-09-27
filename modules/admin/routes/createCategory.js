const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const { routes: { admin: { createCategory: createCategoryRoute } } } = require("../../../constant/Constants");
const categoryController = require("../controllers/categoryController");

const validationBody = {
  type: "object",
  properties: {
    description: { type: "string" },
    name: { type: "string" }
  },
  required: [ "description", "name" ]
};

const createCategory = async ( req, res ) => {
  //TODO: Check validation
  validate( req.body, validationBody );

  try {
    const response = await categoryController.insertCategory( req.body );
    res.json({ data: response[ 0 ] });
  } catch (error) {
    console.error("Error occurred trying to create category: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.post( createCategoryRoute, createCategory, { isPublic: true } );
