const merchantService = require("../services/merchantService");

/**
 * @class
 * @description Merchant controller
 */
class MerchantController {

  /**
	 * @desc Method to insert merchant
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertMerchant( { categoryId, description, name } ) {
    return await merchantService.insertMerchant( { categoryId, description, name } );
  }
}

module.exports = MerchantController;
