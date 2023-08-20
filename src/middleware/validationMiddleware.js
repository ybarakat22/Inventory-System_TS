"use strict";
exports.__esModule = true;
exports.validateInput = void 0;
var validateInput = function (req, res, next) {
    var name = req.body.name;
    if (!name) {
        return res.status(400).json({ message: "Invalid input" });
    }
    next();
};
exports.validateInput = validateInput;
