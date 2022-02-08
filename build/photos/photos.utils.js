"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processHashtags = void 0;

var processHashtags = function processHashtags(caption) {
  var _caption$match;

  var hashtags = (_caption$match = caption.match(/#[\w]+/g)) !== null && _caption$match !== void 0 ? _caption$match : [];
  return hashtags.map(function (hashtag) {
    return {
      where: {
        hashtag: hashtag
      },
      create: {
        hashtag: hashtag
      }
    };
  });
};

exports.processHashtags = processHashtags;