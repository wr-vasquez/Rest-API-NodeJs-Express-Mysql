"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _language = _interopRequireDefault(require("./routes/language.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Routes

var app = (0, _express["default"])();

// Settings
app.set("port", 4000);

// Middlewares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());

// Routes
app.use("/api/languages", _language["default"]);
var _default = app;
exports["default"] = _default;