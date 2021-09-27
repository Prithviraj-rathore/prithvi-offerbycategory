const categoryService = require("../services/categoryService");

/**
 * @class
 * @description Category controller
 */
class CategoryController {

  /**
	 * @desc Method to get categories
	 */
	 static async getCategories ( ) {
    return await categoryService.getCategories( );
  }

  /**
	 * @desc Method to insert category
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertCategory( { description, name } ) {
    return await categoryService.insertCategory( { description, name } );
  }
}

module.exports = CategoryController;
