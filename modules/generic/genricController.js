const AWS = require("aws-sdk");
const fs = require("fs");
/**
 * @class
 * @description Assets controller for performing all assets related operations
 */
class GenricController {
  /**
     * Method to get documents
     * @param {Model} model
     * @param {Object} query
     */
  static async checkHealth() {
    return {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now()
    };

  }


  static async uploadSingleMediaToS3(filePath,key,type) {
 
    return new Promise(function (resolve, reject) {
      AWS.config = {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
        bucketName: process.env.bucketName,
        region: process.env.region
      };
      const s3 = new AWS.S3({ params: { Bucket: process.env.bucketName } });
      let params = {
        Bucket: process.env.bucketName,
        Key: key,
        Body: fs.createReadStream(filePath),
        ContentType: type,
        ACL: "public-read"
      };
      s3.upload(params, function (error, data) {
        if (data) {
          resolve(data.Location);
        }
        else
          reject(error);
      });
    });
  }


}

module.exports = GenricController;
