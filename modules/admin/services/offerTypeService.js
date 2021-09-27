const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description offerType service class
 **/
class OfferTypeService {

  /**
     * @desc method to insert offerType 
     * @param {Object} data 
     */
  static async insertOfferType ( { description, minAmt, maxDiscount, name, value } ) {
    return await db()
      .insert([
        { description, minAmt, maxDiscount, name, value },
      ])
      .into("offer_type")
      .returning( "id" );
  }
}

module.exports = OfferTypeService;
