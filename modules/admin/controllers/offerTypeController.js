const offerTypeService = require("../services/offerTypeService");

/**
 * @class
 * @description OfferType controller
 */
class OfferTypeController {

  /**
	 * @desc Method to insert offerType
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertOfferType( { description, minAmt, maxDiscount, name, value } ) {
    return await offerTypeService.insertOfferType( { description, minAmt, maxDiscount, name, value } );
  }
}

module.exports = OfferTypeController;
