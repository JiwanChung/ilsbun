(function () {

/* Imports */
var _ = Package.underscore._;
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;

/* Package-scope variables */
var globals, __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n-db/packages/tap_i18n-db.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/tap:i18n-db/globals.js                                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// The globals object will be accessible to the build plugin, the server and                                     // 1
// the client                                                                                                    // 2
                                                                                                                 // 3
globals = {                                                                                                      // 4
  fallback_language: "en"                                                                                        // 5
};                                                                                                               // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/tap:i18n-db/tap_i18n_db-common.coffee.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var commonCollectionExtensions, removeTrailingUndefs,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

TAPi18n.Collection = function(name, options) {
  var collection, original_transform;
  if (options == null) {
    options = {};
  }
  if (Meteor.isClient) {
    original_transform = options.transform || function(doc) {
      return doc;
    };
    options.transform = function(doc) {
      return share.i18nCollectionTransform(original_transform(doc), collection);
    };
  }
  collection = share.i18nCollectionExtensions(commonCollectionExtensions(new Meteor.Collection(name, options)));
  if (Meteor.isClient) {
    if (Package["yogiben:admin"] != null) {
      collection._disableTransformationOnRoute(/^\/admin(\/?$|\/)/);
    }
  }
  collection._base_language = "base_language" in options ? options["base_language"] : globals.fallback_language;
  return collection;
};

share.helpers = {};

share.helpers.dialectOf = function(lang) {
  if ((lang != null) && __indexOf.call(lang, "-") >= 0) {
    return lang.replace(/-.*/, "");
  }
  return null;
};

share.helpers.removeTrailingUndefs = function(arr) {
  while ((!_.isEmpty(arr)) && (_.isUndefined(_.last(arr)))) {
    arr.pop();
  }
  return arr;
};

removeTrailingUndefs = share.helpers.removeTrailingUndefs;

commonCollectionExtensions = function(obj) {
  var getLanguageOrEnvLanguage, isSupportedLanguage, reportError, throwError, verifyI18nEnabled;
  reportError = function(error, attempted_operation, callback) {
    if (_.isFunction(callback)) {
      Meteor.setTimeout((function() {
        return callback(error, false);
      }), 0);
    } else {
      console.log("" + attempted_operation + " failed: " + error.reason);
    }
    return error;
  };
  throwError = function(error, attempted_operation, callback) {
    throw reportError(error, attempted_operation, callback);
  };
  verifyI18nEnabled = function(attempted_operation, callback) {
    if (TAPi18n._enabled()) {
      return;
    }
    return throwError(new Meteor.Error(400, "TAPi18n is not supported"), attempted_operation, callback);
  };
  isSupportedLanguage = function(lang, attempted_operation, callback) {
    if (__indexOf.call(TAPi18n.conf.supported_languages, lang) >= 0) {
      return;
    }
    return throwError(new Meteor.Error(400, "Not supported language: " + lang), attempted_operation, callback);
  };
  getLanguageOrEnvLanguage = function(language_tag, attempted_operation, callback) {
    if (Meteor.isClient) {
      if (language_tag == null) {
        language_tag = TAPi18n.getLanguage();
      }
    }
    if (language_tag != null) {
      return language_tag;
    }
    return throwError(new Meteor.Error(400, "Missing language_tag"), attempted_operation, callback);
  };
  obj.insertTranslations = function(doc, translations, callback) {
    var lang;
    try {
      verifyI18nEnabled("insert", callback);
    } catch (_error) {
      return null;
    }
    doc = _.extend({}, doc);
    translations = _.extend({}, translations);
    if (translations != null) {
      for (lang in translations) {
        try {
          isSupportedLanguage(lang, "insert", callback);
        } catch (_error) {
          return null;
        }
        if (lang === this._base_language) {
          doc = _.extend(doc, translations[lang]);
          delete translations[lang];
        }
      }
      if (!_.isEmpty(translations)) {
        doc = _.extend(doc, {
          i18n: translations
        });
      }
    }
    return this.insert.apply(this, removeTrailingUndefs([doc, callback]));
  };
  obj.updateTranslations = function(selector, translations, options, callback) {
    var lang, updates;
    if (_.isFunction(options)) {
      callback = options;
      options = void 0;
    }
    try {
      verifyI18nEnabled("update", callback);
    } catch (_error) {
      return null;
    }
    updates = {};
    if (translations != null) {
      for (lang in translations) {
        try {
          isSupportedLanguage(lang, "update", callback);
        } catch (_error) {
          return null;
        }
        if (lang === this._base_language) {
          _.extend(updates, translations[lang]);
        } else {
          _.extend(updates, _.object(_.map(translations[lang], (function(val, field) {
            return ["i18n." + lang + "." + field, val];
          }))));
        }
      }
    }
    return this.update.apply(this, removeTrailingUndefs([
      selector, {
        $set: updates
      }, options, callback
    ]));
  };
  obj.removeTranslations = function(selector, fields, options, callback) {
    var field, lang, updates, _i, _len;
    if (_.isFunction(options)) {
      callback = options;
      options = void 0;
    }
    try {
      verifyI18nEnabled("remove translations", callback);
    } catch (_error) {
      return null;
    }
    if (fields == null) {
      reportError(new Meteor.Error(400, "Missing arugment: fields"), "remove translations", callback);
      return null;
    }
    if (!_.isArray(fields)) {
      reportError(new Meteor.Error(400, "fields argument should be an array"), "remove translations", callback);
      return null;
    }
    updates = {};
    for (_i = 0, _len = fields.length; _i < _len; _i++) {
      field = fields[_i];
      lang = _.first(field.split("."));
      try {
        isSupportedLanguage(lang, "remove translations", callback);
      } catch (_error) {
        return null;
      }
      if (lang === this._base_language) {
        field = field.replace("" + lang + ".", "");
        if (field === this._base_language) {
          reportError(new Meteor.Error(400, "Complete removal of collection's base language from a document is not permitted"), "remove translations", callback);
          return null;
        }
        updates[field] = "";
      } else {
        updates["i18n." + field] = "";
      }
    }
    return this.update.apply(this, removeTrailingUndefs([
      selector, {
        $unset: updates
      }, options, callback
    ]));
  };
  obj.insertLanguage = function(doc, translations, language_tag, callback) {
    var _translations;
    try {
      verifyI18nEnabled("insert", callback);
    } catch (_error) {
      return null;
    }
    if (_.isFunction(language_tag)) {
      callback = language_tag;
      language_tag = void 0;
    }
    try {
      language_tag = getLanguageOrEnvLanguage(language_tag, "insert", callback);
    } catch (_error) {
      return null;
    }
    _translations = {};
    _translations[language_tag] = translations;
    return this.insertTranslations(doc, _translations, callback);
  };
  obj.updateLanguage = function(selector, translations) {
    var arg, args, callback, language_tag, options, _i, _len, _ref, _translations;
    try {
      verifyI18nEnabled("update", callback);
    } catch (_error) {
      return null;
    }
    language_tag = options = callback = void 0;
    args = _.toArray(arguments);
    _ref = args.slice(2);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      arg = _ref[_i];
      if (_.isFunction(arg)) {
        callback = arg;
        break;
      } else if (_.isObject(arg)) {
        options = arg;
      } else if (_.isUndefined(options) && _.isString(arg)) {
        language_tag = arg;
      }
    }
    try {
      language_tag = getLanguageOrEnvLanguage(language_tag, "update", callback);
    } catch (_error) {
      return null;
    }
    _translations = {};
    _translations[language_tag] = translations;
    return this.updateTranslations(selector, _translations, options, callback);
  };
  obj.translate = obj.updateLanguage;
  obj.removeLanguage = function(selector, fields) {
    var arg, args, callback, language_tag, options, _fields_to_remove, _i, _len, _ref;
    try {
      verifyI18nEnabled("remove translations", callback);
    } catch (_error) {
      return null;
    }
    language_tag = options = callback = void 0;
    args = _.toArray(arguments);
    _ref = args.slice(2);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      arg = _ref[_i];
      if (_.isFunction(arg)) {
        callback = arg;
        break;
      } else if (_.isObject(arg)) {
        options = arg;
      } else if (_.isUndefined(options) && _.isString(arg)) {
        language_tag = arg;
      }
    }
    try {
      language_tag = getLanguageOrEnvLanguage(language_tag, "remove", callback);
    } catch (_error) {
      return null;
    }
    if (fields !== null && !_.isArray(fields)) {
      reportError(new Meteor.Error(400, "fields argument should be an array"), "remove translations", callback);
      return null;
    }
    if (fields === null) {
      _fields_to_remove = ["" + language_tag];
    } else {
      _fields_to_remove = _.map(fields, function(field) {
        return "" + language_tag + "." + field;
      });
    }
    return this.removeTranslations(selector, _fields_to_remove, options, callback);
  };
  return obj;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/tap:i18n-db/tap_i18n_db-server.coffee.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Fiber,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Fiber = Npm.require('fibers');

share.i18nCollectionExtensions = function(obj) {
  obj.i18nFind = function(selector, options) {
    var collection_base_language, current_language, dialect_of, field, i18n_fields, lang, original_fields, supported_languages, white_list_projection, _i, _j, _k, _len, _len1, _len2;
    current_language = Fiber.current.language_tag;
    if (typeof current_language === "undefined") {
      throw new Meteor.Error(500, "TAPi18n.i18nFind should be called only from TAPi18n.publish functions");
    }
    if (_.isUndefined(selector)) {
      selector = {};
    }
    dialect_of = share.helpers.dialectOf(current_language);
    collection_base_language = this._base_language;
    supported_languages = TAPi18n.conf.supported_languages;
    if ((current_language != null) && !(__indexOf.call(supported_languages, current_language) >= 0)) {
      throw new Meteor.Error(400, "Not supported language");
    }
    if (options == null) {
      options = {};
    }
    original_fields = options.fields || {};
    i18n_fields = _.extend({}, original_fields);
    if (!_.isEmpty(i18n_fields)) {
      delete i18n_fields._id;
      white_list_projection = _.first(_.values(i18n_fields)) === 1;
      if ("_id" in original_fields) {
        i18n_fields["_id"] = original_fields["_id"];
      }
      if (white_list_projection) {
        if (lang !== null) {
          for (_i = 0, _len = supported_languages.length; _i < _len; _i++) {
            lang = supported_languages[_i];
            if (lang !== collection_base_language && ((lang === current_language) || (lang === dialect_of))) {
              for (field in original_fields) {
                if (field !== "_id" && !(__indexOf.call(field, ".") >= 0)) {
                  i18n_fields["i18n." + lang + "." + field] = 1;
                }
              }
            }
          }
        }
      } else {
        if (current_language === null) {
          i18n_fields.i18n = 0;
        } else {
          for (_j = 0, _len1 = supported_languages.length; _j < _len1; _j++) {
            lang = supported_languages[_j];
            if (lang !== collection_base_language) {
              if (lang !== current_language && lang !== dialect_of) {
                i18n_fields["i18n." + lang] = 0;
              } else {
                for (field in original_fields) {
                  if (field !== "_id" && !(__indexOf.call(field, ".") >= 0)) {
                    i18n_fields["i18n." + lang + "." + field] = 0;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (current_language === null) {
        i18n_fields.i18n = 0;
      } else {
        for (_k = 0, _len2 = supported_languages.length; _k < _len2; _k++) {
          lang = supported_languages[_k];
          if (lang !== collection_base_language && lang !== current_language && lang !== dialect_of) {
            i18n_fields["i18n." + lang] = 0;
          }
        }
      }
    }
    return this.find(selector, _.extend({}, options, {
      fields: i18n_fields
    }));
  };
  return obj;
};

TAPi18n.publish = function(name, handler, options) {
  var i18n_handler;
  if (name === null) {
    throw new Meteor.Error(500, "TAPi18n.publish doesn't support null publications");
  }
  i18n_handler = function() {
    var args, cursors, language_tag;
    args = Array.prototype.slice.call(arguments);
    language_tag = _.last(args);
    this.language = language_tag;
    Fiber.current.language_tag = language_tag;
    cursors = handler.apply(this, args.slice(0, -1));
    delete Fiber.current.language_tag;
    if (cursors != null) {
      return cursors;
    }
  };
  return Meteor.publish(name, i18n_handler, options);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tap:i18n-db'] = {};

})();

//# sourceMappingURL=tap_i18n-db.js.map
