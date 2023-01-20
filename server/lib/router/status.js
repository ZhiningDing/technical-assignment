"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("./data");
const statusRouter = (0, express_1.Router)();
// return a list of IWebsite
statusRouter.get("/", (req, res) => {
    return res.status(200).json(data_1.websiteData);
});
exports.default = statusRouter;
//# sourceMappingURL=status.js.map