const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const constants = require("../../../constant/Constants");
const UserController = require("../userController");

const validationBody = {
  type: "object",
  properties: {
    mobile: { type: "string",format:"mobileNumber"},
    code: { type: "number", minLength:4,maxLength: 4 }
  },
  required: ["mobile", "code"]
};

const otpHandler = async (req, res) => {

  //validate body
  validate(req.body, validationBody);

  //verify OTP
  const result = await UserController.verifyOTP(req.body);
  if(result.token){
    res.setHeader("Authorization",result.token);
    delete result.token;
  }
  //send response
  res.json(result);
};

module.exports = route.post(constants.routes.users.verifyOtp, otpHandler, { isPublic: true });