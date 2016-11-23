(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Autoupdate = Package.autoupdate.Autoupdate;

/* Package-scope variables */
var __coffeescriptShare, Cloudinary;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/lepozepo_cloudinary/server/configuration.coffee.js                              //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                            // 1
                                                                                            //
Cloudinary = Npm.require("cloudinary");                                                     // 1
                                                                                            //
Cloudinary.rules = {};                                                                      // 1
                                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/lepozepo_cloudinary/server/signature.coffee.js                                  //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Future;                                                                                 // 1
                                                                                            //
Future = Npm.require("fibers/future");                                                      // 1
                                                                                            //
Meteor.methods({                                                                            // 1
  "c.sign": function(ops) {                                                                 // 4
    var auth_function, signature;                                                           // 5
    if (ops == null) {                                                                      //
      ops = {};                                                                             //
    }                                                                                       //
    check(ops, Match.Optional(Object));                                                     // 5
    this.unblock();                                                                         // 5
    if (Cloudinary.rules.signature) {                                                       // 8
      this.options = ops;                                                                   // 9
      auth_function = _.bind(Cloudinary.rules.signature, this);                             // 9
      if (!auth_function()) {                                                               // 11
        throw new Meteor.Error("Unauthorized", "Signature not allowed");                    // 12
      }                                                                                     //
    }                                                                                       //
    signature = Cloudinary.uploader.direct_upload("", ops);                                 // 5
    return signature;                                                                       // 18
  },                                                                                        //
  "c.delete_by_public_id": function(public_id, type) {                                      // 4
    var auth_function, future, ops;                                                         // 22
    check(public_id, String);                                                               // 22
    check(type, Match.OneOf(String, void 0, null));                                         // 22
    this.unblock();                                                                         // 22
    if (Cloudinary.rules["delete"]) {                                                       // 26
      this.public_id = public_id;                                                           // 27
      auth_function = _.bind(Cloudinary.rules["delete"], this);                             // 27
      if (!auth_function()) {                                                               // 29
        throw new Meteor.Error("Unauthorized", "Delete not allowed");                       // 30
      }                                                                                     //
    }                                                                                       //
    if (type) {                                                                             // 32
      ops = {                                                                               // 33
        type: type                                                                          // 34
      };                                                                                    //
    }                                                                                       //
    future = new Future();                                                                  // 22
    Cloudinary.api.delete_resources([public_id], function(result) {                         // 22
      return future["return"](result);                                                      //
    }, ops);                                                                                //
    return future.wait();                                                                   // 42
  },                                                                                        //
  "c.get_private_resource": function(public_id, ops) {                                      // 4
    var auth_function;                                                                      // 45
    if (ops == null) {                                                                      //
      ops = {};                                                                             //
    }                                                                                       //
    check(public_id, String);                                                               // 45
    check(ops, Match.Optional(Object));                                                     // 45
    this.unblock();                                                                         // 45
    _.extend(ops, {                                                                         // 45
      sign_url: true,                                                                       // 50
      type: "private"                                                                       // 50
    });                                                                                     //
    if (Cloudinary.rules.private_resource) {                                                // 53
      this.public_id = public_id;                                                           // 54
      auth_function = _.bind(Cloudinary.rules.private_resource, this);                      // 54
      if (!auth_function()) {                                                               // 56
        throw new Meteor.Error("Unauthorized", "Access not allowed");                       // 57
      }                                                                                     //
    }                                                                                       //
    return Cloudinary.url(public_id, ops);                                                  //
  },                                                                                        //
  "c.get_download_url": function(public_id, ops) {                                          // 4
    var auth_function, format;                                                              // 63
    if (ops == null) {                                                                      //
      ops = {};                                                                             //
    }                                                                                       //
    check(public_id, String);                                                               // 63
    check(ops, Match.Optional(Object));                                                     // 63
    this.unblock();                                                                         // 63
    if (Cloudinary.rules.download_url) {                                                    // 67
      this.public_id = public_id;                                                           // 68
      auth_function = _.bind(Cloudinary.rules.download_url, this);                          // 68
      if (!auth_function()) {                                                               // 70
        throw new Meteor.Error("Unauthorized", "Access not allowed");                       // 71
      }                                                                                     //
    }                                                                                       //
    format = ops.format || "";                                                              // 63
    return Cloudinary.utils.private_download_url(public_id, format, _.omit(ops, "format"));
  }                                                                                         //
});                                                                                         //
                                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lepozepo:cloudinary'] = {}, {
  Cloudinary: Cloudinary
});

})();

//# sourceMappingURL=lepozepo_cloudinary.js.map
