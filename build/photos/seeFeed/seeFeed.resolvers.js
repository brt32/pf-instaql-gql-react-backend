"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../client"));

var _users = require("../../users/users.utils");

var _default = {
  Query: {
    seeFeed: (0, _users.protectedResolver)(function (_, __, _ref) {
      var loggedInUser = _ref.loggedInUser;
      console.log(_client["default"].photo);
      console.log(loggedInUser);
      return _client["default"].photo.findMany({
        where: {
          OR: [{
            user: {
              followers: {
                some: {
                  id: loggedInUser.id
                }
              }
            }
          }, {
            userId: loggedInUser.id
          }]
        },
        orderBy: {
          createdAt: "desc"
        }
      });
    })
  }
};
exports["default"] = _default;