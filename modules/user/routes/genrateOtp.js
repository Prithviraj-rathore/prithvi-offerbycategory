const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const constants = require("../../../constant/Constants");
const UserController = require("../userController");

const validationBody = {
  type: "object",
  properties: {
    mobile: { type: "string",format:"mobileNumber" },
  },
  required: ["mobile"]
};

const otpHandler = async (req, res) => {

  //validate body
  validate(req.body, validationBody);

  //generate OTP
  await UserController.generateOTP(req.body);
  //send response
  res.json({ succes: true });
};

module.exports = route.post(constants.routes.users.generateOtp, otpHandler, { isPublic: true });