const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const constants = require("../../../constant/Constants");
const UserController = require("../userController");

const validationBody = {
  type: "object",
  properties: {
    partnerId: { type: "number" },
    code: { type: "number", minLength: 10, maxLength: 10 }
  },
  required: ["partnerId", "code"]
};

const otpHandler = async (req, res) => {

  //validate body
  validate(req.body, validationBody);

  //verify Membership
  const result = await UserController.verifyMembership(req.body);
  //send response
  res.json({success:result});
};

module.exports = route.post(constants.routes.users.verifyMembership, otpHandler, { isPublic: true });