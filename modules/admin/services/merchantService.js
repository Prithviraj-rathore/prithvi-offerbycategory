const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description merchant service class
 **/
class MerchantService {

  /**
     * @desc method to insert merchant 
     * @param {Object} data 
     */
  static async insertMerchant ( { categoryId, description, name } ) {
    return await db()
      .insert([
        { categoryId, description, name },
      ])
      .into("merchant")
      .returning( "id" );
  }
}

module.exports = MerchantService;
