const partnerService = require("../../services/partnerService");
/**
 * @class
 * @description User controller for performing user related operations
 */
class partnerController {

  /**
      * @desc method to generate otp
      * @param {Object} data 
   **/
  static async getOffers({categoryId}) {
    return await partnerService.getOffers(categoryId);
    
  }
  static async getPartners(){
    return await partnerService.getPartners();
  }

}

module.exports = partnerController;