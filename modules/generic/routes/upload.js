const route = require("../../../lib/route");
const constants = require("../../../constant/Constants");
const genricController = require("../genricController");
const multer = require("../../../lib/multer");
const path = require("path");
const util = require("util");

const fileUploadHandler = async (req, res) => {

  //upload file locally
  await util.promisify(multer.single("file"))(req, res);
  //get the path of file.
  const filePath = path.join(__dirname, "../../../fileupload", req.file.originalname);
  
  //upload file on s3
  const result = await genricController.uploadSingleMediaToS3(filePath,req.file.filename,req.file.mimetype);
  //send response
  res.json(result);
};

module.exports = route.post(constants.routes.upload, fileUploadHandler, { isPublic: true });