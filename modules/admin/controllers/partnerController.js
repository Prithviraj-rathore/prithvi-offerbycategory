const partnerService = require("../services/partnerService");

/**
 * @class
 * @description Partner controller
 */
class PartnerController {

  /**
	 * @desc Method to get partners
	 */
	 static async getPartners ( ) {
    return await partnerService.getPartners( );
  }

  /**
	 * @desc Method to insert partner
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertPartner( partner ) {
    return await partnerService.insertPartner( partner );
  }

  /**
	 * @desc Method to update partner
	 * @param {Object} data
	 * @returns boolean
	 */
  static async updatePartner( id, partner ) {
    return await partnerService.updatePartner( id, partner );
  }
}

module.exports = PartnerController;
