const offerService = require("../services/offerService");

/**
 * @class
 * @description Offer controller
 */
class OfferController {

  /**
	 * @desc Method to insert offer
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertOffer( offer ) {
    return await offerService.insertOffer( offer );
  }
}

module.exports = OfferController;
