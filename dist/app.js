"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//perser 
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/', (req, res) => {
    res.send('Hello friendsrrr after node good mornig!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("got Data in from the request");
});
exports.default = app;
