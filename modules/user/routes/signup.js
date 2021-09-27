const route = require("../../../lib/route");
const validate = require("../../../lib/validate");
const constants = require("../../../constant/Constants");
const UserController = require("../userController");

const validationBody = {
  type: "object",
  properties: {
    mobile: { type: "string",format:"mobileNumber"},
    firstName: { type: "string",minLength:3 ,maxLength:23 },
    lastName: { type: "string",minLength:3 ,maxLength:23 },
    email: { type: "string", format: "email" },
    profileImgUrl: { type: "string" },
    memberId: { type: "number"},
    emirateId:{type:"string"},
    emirateFrontDoc:{type:"string"},
    emirateBackDoc:{type:"string"}
  },
  required: ["email", "firstName", "lastName"]
};

const signupHandler = async (req, res) => {

  //validate body
  validate(req.body, validationBody);

  //TODO: need to Handle second screen data as well.
  //signup
  let result = await UserController.signup(req.body);
  if (result.token) {
    res.setHeader("Authorization", result.token);
    delete result.token;
  }
  //send response
  res.json(result);
};

module.exports = route.post(constants.routes.users.signup, signupHandler, { isPublic: true });