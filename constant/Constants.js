module.exports = {
  routes:{
    status:"/status",
    upload:"/upload",
    users:{
      generateOtp :"/v1/user/generateOtp",
      verifyOtp:"/v1/user/verifyOtp",
      signup:"/v1/user/signup",
      verifyMembership:"/v1/user/verify/membership" , 
      getCategories: "/v1/user/getcategories",
      "getofferbycategory" : "/v1/user/getofferbycategory"
    },
    partner :{
      getOffers:"/v1/offer",
      getPartners:"/v1/partner"
    },
    admin:{
      createCategory: "/v1/admin/createcategory",
      createMembership: "/v1/admin/createmembership",
      createMerchant: "/v1/admin/createmerchant",
      createOffer: "/v1/admin/createoffer",
      createOfferType: "/v1/admin/createoffertype",
      getCategories: "/v1/admin/getcategories",
      partner: "/v1/admin/partners"
    }
  },
  moduleFolderName:"modules",
  routeFolderName:"routes",
  mimeTypeMap:{"image/png":"png","image/jpg":"jpg","image/jpeg":"jpeg"},
  uploadSize:5000000
};
