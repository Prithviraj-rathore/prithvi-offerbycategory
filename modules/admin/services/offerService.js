const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description offer service class
 **/
class OfferService {

  /**
     * @desc method to insert offer 
     * @param {Object} data 
     */
  static async insertOffer ( { categoryId, description, endDate, merchantId, name, offerTypeId, perUserLimit, pointsEquivalent, quantity, startDate } ) {
    return await db()
      .insert([
        { categoryId, description, endDate, merchantId, name, offerTypeId, perUserLimit, pointsEquivalent, quantity, startDate },
      ])
      .into("offer")
      .returning( "id" );
  }
}

module.exports = OfferService;
