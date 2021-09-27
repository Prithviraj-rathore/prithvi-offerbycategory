const membershipService = require("../services/membershipService");

/**
 * @class
 * @description Membership controller
 */
class MembershipController {

  /**
	 * @desc Method to insert membership
	 * @param {Object} data
	 * @returns boolean
	 */
  static async insertMembership( { code, expiresOn, partnerId } ) {
    return await membershipService.insertMembership( { code, expiresOn, partnerId } );
  }
}

module.exports = MembershipController;
