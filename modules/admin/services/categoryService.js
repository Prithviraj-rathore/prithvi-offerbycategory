const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description category service class
 **/
class CategoryService {

  /**
     * @desc method to get categories 
     * @param {Object} data 
     */
  static async getCategories ( ) {
    return await db()( "category" )
      .select( "description", "id", "name" )
      .where( { isActive: 1 } );
  }

  /**
     * @desc method to insert category 
     * @param {Object} data 
     */
	 static async insertCategory ( { description, name } ) {
    return await db()
      .insert([
        { description, name },
      ])
      .into("category")
      .returning( "id" );
  }
}

module.exports = CategoryService;
