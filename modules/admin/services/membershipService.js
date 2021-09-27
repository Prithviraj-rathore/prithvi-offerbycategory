const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description membership service class
 **/
class MembershipService {

  /**
     * @desc method to insert membership 
     * @param {Object} data 
     */
  static async insertMembership ( { code, expiresOn, partnerId } ) {
    return await db()
      .insert([
        { code, expiresOn, partnerId },
      ])
      .into("membership")
      .returning( "id" );
  }
}

module.exports = MembershipService;
