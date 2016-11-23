var require = meteorInstall({"imports":{"startup":{"both":{"index.js":["./useraccounts-configuration.js","./page.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/index.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.import('./useraccounts-configuration.js');module.import('./page.js');                                          // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"page.js":["../../api/bulletinall.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/page.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Bulletinall;module.import('../../api/bulletinall.js',{"Bulletinall":function(v){Bulletinall=v}});                 // 1
                                                                                                                      //
this.BulletinNewsPages = new Meteor.Pagination(Bulletinall, {                                                         // 3
  itemTemplate: "bulletindata",                                                                                       // 4
  availableSettings: {                                                                                                // 5
    filters: true                                                                                                     // 6
  }                                                                                                                   // 5
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"useraccounts-configuration.js":["meteor/useraccounts:core",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/useraccounts-configuration.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var AccountsTemplates;module.import('meteor/useraccounts:core',{"AccountsTemplates":function(v){AccountsTemplates=v}});
                                                                                                                      //
/**                                                                                                                   //
 * The useraccounts package must be configured for both client and server to work properly.                           //
 * See the Guide for reference (https://github.com/meteor-useraccounts/core/blob/master/Guide.md)                     //
 */                                                                                                                   //
                                                                                                                      //
AccountsTemplates.configure({                                                                                         // 8
  showForgotPasswordLink: true,                                                                                       // 9
  defaultTemplate: 'Auth_page',                                                                                       // 10
  defaultLayout: 'App_body',                                                                                          // 11
  defaultContentRegion: 'main',                                                                                       // 12
  defaultLayoutRegions: {}                                                                                            // 13
});                                                                                                                   // 8
                                                                                                                      //
AccountsTemplates.configureRoute('signIn', {                                                                          // 16
  name: 'signin',                                                                                                     // 17
  path: '/signin'                                                                                                     // 18
});                                                                                                                   // 16
                                                                                                                      //
AccountsTemplates.configureRoute('signUp', {                                                                          // 21
  name: 'join',                                                                                                       // 22
  path: '/join'                                                                                                       // 23
});                                                                                                                   // 21
                                                                                                                      //
AccountsTemplates.configureRoute('forgotPwd');                                                                        // 26
                                                                                                                      //
AccountsTemplates.configureRoute('resetPwd', {                                                                        // 28
  name: 'resetPwd',                                                                                                   // 29
  path: '/reset-password'                                                                                             // 30
});                                                                                                                   // 28
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server":{"cloudinary.js":["meteor/lepozepo:cloudinary",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/cloudinary.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Cloudinary;module.import('meteor/lepozepo:cloudinary',{"Cloudinary":function(v){Cloudinary=v}});                  // 1
                                                                                                                      //
Cloudinary.config({                                                                                                   // 3
  cloud_name: 'jiwanchung',                                                                                           // 4
  api_key: '663292582213893',                                                                                         // 5
  api_secret: '2wVqVsiciXcSAOT9PotmJRnQ5_c'                                                                           // 6
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"fixtures.js":["meteor/meteor","../../api/contentall.js","../../api/menus.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/fixtures.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Contentall;module.import('../../api/contentall.js',{"Contentall":function(v){Contentall=v}});var Menus;module.import('../../api/menus.js',{"Menus":function(v){Menus=v}});
                                                                                                                      // 2
                                                                                                                      // 3
/*import { Lists } from '../../api/lists/lists.js';                                                                   //
import { Todos } from '../../api/todos/todos.js';*/                                                                   //
                                                                                                                      //
// if the database is empty on server start, create some sample data.                                                 //
Meteor.startup(function () {});                                                                                       // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./fixtures.js","./reset-password-email.js","./security.js","./register-api.js","./cloudinary.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/index.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.import('./fixtures.js');module.import('./reset-password-email.js');module.import('./security.js');module.import('./register-api.js');module.import('./cloudinary.js');// This defines a starting set of data to be loaded if the app is loaded with an empty db.
                                                                                                                      // 2
                                                                                                                      //
// This file configures the Accounts package to define the UI of the reset password email.                            //
                                                                                                                      // 5
                                                                                                                      //
// Set up some rate limiting and other important security settings.                                                   //
                                                                                                                      // 8
                                                                                                                      //
// This defines all the collections, publications and methods that the application provides                           //
// as an API to the client.                                                                                           //
                                                                                                                      // 12
                                                                                                                      //
                                                                                                                      // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"register-api.js":["../../api/contentall.js","../../api/menus.js","../../api/images.js","../../api/imagedata.js","../../api/bulletinall.js","../../api/files.js","../../api/filedata.js","../../api/galleryall.js","../../api/people.js","../../api/footer.js","../../api/timeline.js","../../api/tree.js","../../api/site.js","../../api/three.js","../../api/threed.js","../../api/ip.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/register-api.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.import('../../api/contentall.js');module.import('../../api/menus.js');module.import('../../api/images.js');module.import('../../api/imagedata.js');module.import('../../api/bulletinall.js');module.import('../../api/files.js');module.import('../../api/filedata.js');module.import('../../api/galleryall.js');module.import('../../api/people.js');module.import('../../api/footer.js');module.import('../../api/timeline.js');module.import('../../api/tree.js');module.import('../../api/site.js');module.import('../../api/three.js');module.import('../../api/threed.js');module.import('../../api/ip.js');/*import '../../api/lists/methods.js';
import '../../api/lists/server/publications.js';                                                                      //
import '../../api/todos/methods.js';                                                                                  //
import '../../api/todos/server/publications.js';*/                                                                    //
                                                                                                                      // 5
                                                                                                                      // 6
                                                                                                                      // 7
                                                                                                                      // 8
                                                                                                                      // 9
                                                                                                                      // 10
                                                                                                                      // 11
                                                                                                                      // 12
                                                                                                                      // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      // 16
                                                                                                                      // 17
                                                                                                                      // 18
                                                                                                                      // 19
                                                                                                                      // 20
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"reset-password-email.js":["meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/reset-password-email.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                              // 1
                                                                                                                      //
Accounts.emailTemplates.siteName = 'Meteor Guide Todos Example';                                                      // 4
Accounts.emailTemplates.from = 'Meteor Todos Accounts <accounts@example.com>';                                        // 5
                                                                                                                      //
Accounts.emailTemplates.resetPassword = {                                                                             // 7
  subject: function subject() {                                                                                       // 8
    return 'Reset your password on Meteor Todos';                                                                     // 9
  },                                                                                                                  // 10
  text: function text(user, url) {                                                                                    // 11
    return 'Hello!\nClick the link below to reset your password on Meteor Todos.\n' + url + '\nIf you didn\'t request this email, please ignore it.\nThanks,\nThe Meteor Todos team\n';
  }                                                                                                                   // 19
};                                                                                                                    // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"security.js":["meteor/meteor","meteor/ddp-rate-limiter","meteor/underscore",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/security.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var DDPRateLimiter;module.import('meteor/ddp-rate-limiter',{"DDPRateLimiter":function(v){DDPRateLimiter=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
// Don't let people write arbitrary data to their 'profile' field from the client                                     //
Meteor.users.deny({                                                                                                   // 6
  update: function update() {                                                                                         // 7
    return true;                                                                                                      // 8
  }                                                                                                                   // 9
});                                                                                                                   // 6
                                                                                                                      //
Meteor.onConnection(function (conn) {                                                                                 // 12
  console.log(conn.clientAddress);                                                                                    // 13
});                                                                                                                   // 14
                                                                                                                      //
Meteor.methods({                                                                                                      // 16
  getIP: function getIP() {                                                                                           // 17
    var ip = this.connection.clientAddress;                                                                           // 18
    return ip;                                                                                                        // 19
  }                                                                                                                   // 20
});                                                                                                                   // 16
                                                                                                                      //
// Get a list of all accounts methods by running `Meteor.server.method_handlers` in meteor shell                      //
var AUTH_METHODS = ['login', 'logout', 'logoutOtherClients', 'getNewToken', 'removeOtherTokens', 'configureLoginService', 'changePassword', 'forgotPassword', 'resetPassword', 'verifyEmail', 'createUser', 'ATRemoveService', 'ATCreateUserServer', 'ATResendVerificationEmail'];
                                                                                                                      //
// Only allow 2 login attempts per connection per 5 seconds                                                           //
DDPRateLimiter.addRule({                                                                                              // 42
  name: function name(_name) {                                                                                        // 43
    return _.contains(AUTH_METHODS, _name);                                                                           // 44
  },                                                                                                                  // 45
                                                                                                                      //
                                                                                                                      //
  // Rate limit per connection ID                                                                                     //
  connectionId: function connectionId() {                                                                             // 48
    return true;                                                                                                      // 48
  }                                                                                                                   // 48
}, 2, 5000);                                                                                                          // 42
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"bulletinall.js":["meteor/mongo","meteor/tmeasday:publish-counts",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/bulletinall.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Bulletinall:function(){return Bulletinall}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var Counts;module.import('meteor/tmeasday:publish-counts',{"Counts":function(v){Counts=v}});
                                                                                                                      // 2
                                                                                                                      //
var Bulletinall = new Mongo.Collection('bulletinall');                                                                // 4
                                                                                                                      //
if (Meteor.isServer) {}                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"contentall.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/contentall.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Contentall:function(){return Contentall}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Contentall = new Mongo.Collection('contentall');                                                                  // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  // This code only runs on the server                                                                                //
  Meteor.publish('contentall', function contentsPublication() {                                                       // 7
    return Contentall.find();                                                                                         // 8
  });                                                                                                                 // 9
}                                                                                                                     // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"filedata.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/filedata.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({FileData:function(){return FileData}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var FileData = new Mongo.Collection('filedata');                                                                      // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  FileData.allow({                                                                                                    // 6
    'insert': function insert() {                                                                                     // 7
      // add custom authentication code here                                                                          //
      return true;                                                                                                    // 9
    }                                                                                                                 // 10
  });                                                                                                                 // 6
  // This code only runs on the server                                                                                //
  Meteor.publish('filedata', function filedataPublication() {                                                         // 13
    return FileData.find();                                                                                           // 14
  });                                                                                                                 // 15
}                                                                                                                     // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"files.js":["meteor/mongo","meteor/cfs:base-package",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/files.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Files:function(){return Files}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var FS;module.import('meteor/cfs:base-package',{"FS":function(v){FS=v}});
                                                                                                                      // 2
                                                                                                                      //
var Files = new FS.Collection("files", {                                                                              // 4
  stores: [new FS.Store.FileSystem("files", { path: process.env.PWD + "/public/files" })]                             // 5
});                                                                                                                   // 4
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 8
  // This code only runs on the server                                                                                //
  Files.allow({                                                                                                       // 10
    'insert': function insert() {                                                                                     // 11
      // add custom authentication code here                                                                          //
      return true;                                                                                                    // 13
    }                                                                                                                 // 14
  });                                                                                                                 // 10
  Meteor.publish('files', function filesPublication() {                                                               // 16
    return Files.find();                                                                                              // 17
  });                                                                                                                 // 18
}                                                                                                                     // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"footer.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/footer.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Footer:function(){return Footer}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Footer = new Mongo.Collection('footer');                                                                          // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  // This code only runs on the server                                                                                //
  Meteor.publish('footer', function footerPublication() {                                                             // 7
    return Footer.find();                                                                                             // 8
  });                                                                                                                 // 9
}                                                                                                                     // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"galleryall.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/galleryall.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Galleryall:function(){return Galleryall}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Galleryall = new Mongo.Collection('galleryall');                                                                  // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  // This code only runs on the server                                                                                //
  Meteor.publish('galleryall', function galleryPublication() {                                                        // 7
    return Galleryall.find();                                                                                         // 8
  });                                                                                                                 // 9
}                                                                                                                     // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"imagedata.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/imagedata.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({ImageData:function(){return ImageData}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var ImageData = new Mongo.Collection('imagedata');                                                                    // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  ImageData.allow({                                                                                                   // 6
    'insert': function insert() {                                                                                     // 7
      // add custom authentication code here                                                                          //
      return true;                                                                                                    // 9
    }                                                                                                                 // 10
  });                                                                                                                 // 6
  // This code only runs on the server                                                                                //
  Meteor.publish('imagedata', function imagedataPublication() {                                                       // 13
    return ImageData.find();                                                                                          // 14
  });                                                                                                                 // 15
}                                                                                                                     // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"images.js":["meteor/mongo","meteor/cfs:base-package",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/images.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Images:function(){return Images}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var FS;module.import('meteor/cfs:base-package',{"FS":function(v){FS=v}});
                                                                                                                      // 2
                                                                                                                      //
var Images = new FS.Collection("images", {                                                                            // 4
  stores: [new FS.Store.FileSystem("images", { path: process.env.PWD + "/public/images" })]                           // 5
});                                                                                                                   // 4
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 8
  // This code only runs on the server                                                                                //
  Images.allow({                                                                                                      // 10
    'insert': function insert() {                                                                                     // 11
      // add custom authentication code here                                                                          //
      return true;                                                                                                    // 13
    }                                                                                                                 // 14
  });                                                                                                                 // 10
  Meteor.publish('images', function imagesPublication() {                                                             // 16
    return Images.find();                                                                                             // 17
  });                                                                                                                 // 18
}                                                                                                                     // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ip.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/ip.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Ip:function(){return Ip}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});     // 1
                                                                                                                      //
var Ip = new Mongo.Collection('ip');                                                                                  // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"menus.js":["meteor/mongo","meteor/tap:i18n",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/menus.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Menus:function(){return Menus}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var TAPi18n;module.import('meteor/tap:i18n',{"TAPi18n":function(v){TAPi18n=v}});
                                                                                                                      // 2
                                                                                                                      //
var Menus = new TAPi18n.Collection("menus", { base_language: 'ko' });                                                 // 4
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 6
  // This code only runs on the server                                                                                //
  Meteor.publish('menus', function menusPublication() {                                                               // 8
    return Menus.find();                                                                                              // 9
  });                                                                                                                 // 10
}                                                                                                                     // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"people.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/people.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({People:function(){return People}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var People = new Mongo.Collection('people');                                                                          // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  // This code only runs on the server                                                                                //
  Meteor.publish('people', function peoplePublication() {                                                             // 7
    return People.find();                                                                                             // 8
  });                                                                                                                 // 9
}                                                                                                                     // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"site.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/site.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Site:function(){return Site}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Site = new Mongo.Collection('site');                                                                              // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"three.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/three.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Three:function(){return Three}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Three = new Mongo.Collection('three');                                                                            // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"threed.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/threed.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Threed:function(){return Threed}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Threed = new Mongo.Collection('threed');                                                                          // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"timeline.js":["meteor/mongo","meteor/tmeasday:publish-counts",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/timeline.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Timeline:function(){return Timeline}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var Counts;module.import('meteor/tmeasday:publish-counts',{"Counts":function(v){Counts=v}});
                                                                                                                      // 2
                                                                                                                      //
var Timeline = new Mongo.Collection('timeline');                                                                      // 4
                                                                                                                      //
if (Meteor.isServer) {}                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"tree.js":["meteor/mongo","meteor/tmeasday:publish-counts",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/tree.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Tree:function(){return Tree}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var Counts;module.import('meteor/tmeasday:publish-counts',{"Counts":function(v){Counts=v}});
                                                                                                                      // 2
                                                                                                                      //
var Tree = new Mongo.Collection('tree');                                                                              // 4
                                                                                                                      //
if (Meteor.isServer) {}                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"i18n":{"en.i18n.json":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// i18n/en.i18n.json                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"ils":"Yonsei Institute of Law Studies","lang":"Language"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ko.i18n.json":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// i18n/ko.i18n.json                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"ils":"연세대학교 법학연구원","lang":"언어","mapoffice":"서울특별시 서대문구 연세로 50 연세대학교 학술정보원 7층 법학연구원","business":"사업단","center":"산하 센터","mapstudy":"서울특별시 서대문구 연세로 50 연세대학교 광복관"});
TAPi18n._registerServerTranslator("ko", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"project-i18n.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// project-i18n.js                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
TAPi18n._enable({"supported_languages":["ko","en"],"i18n_files_route":"/tap-i18n","helper_name":"_","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
TAPi18n.languages_names["en"] = ["English","English"];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server":{"main.js":["/imports/startup/server","/imports/startup/both",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.import('/imports/startup/server');module.import('/imports/startup/both');                                      // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./i18n/en.i18n.json");
require("./i18n/ko.i18n.json");
require("./project-i18n.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
