const db = require("../../../startup/ConnectDB");

/**
 * @class
 * @description partner service class
 **/
class PartnerService {

  /**
     * @desc method to get categories 
     * @param {Object} data 
     */
  static async getPartners ( ) {
    return await db()( "partner" )
      .select( "description", "email", "id", "isEmirateIdReq", "name" )
      .where( { isActive: 1 } );
  }

  /**
     * @desc method to insert partner 
     * @param {Object} data 
     */
	 static async insertPartner ( { description, email, isEmirateIdReq = true, name } ) {
    return await db()
      .insert([
        { description, email, isEmirateIdReq, name },
      ])
      .into("partner")
      .returning( "id" );
  }

  /**
     * @desc method to update partner 
     * @param {Object} data 
     */
	 static async updatePartner ( id, { description, email, isEmirateIdReq = true, name } ) {
     await db()("partner")
      .update( { description, email, isEmirateIdReq, name } )
      .where( { id } );
    return id;
  }
}

module.exports = PartnerService;
