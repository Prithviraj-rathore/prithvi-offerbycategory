const route = require("../../../lib/route");
const { routes: { admin: { getCategories: getCategoriesRoute } } } = require("../../../constant/Constants");
const categoryController = require("../controllers/categoryController");

const getCategories = async ( req, res ) => {
  //TODO: Validation required?

  try {
    const data = await categoryController.getCategories( );
    res.json({ data });
  } catch (error) {
    console.error("Error occurred trying to get categories: " + error.message );
    res.json( { succes: false, error: error.message } );
  }
};

module.exports = route.get( getCategoriesRoute, getCategories, { isPublic: true } );
