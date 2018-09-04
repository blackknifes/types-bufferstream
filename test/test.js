"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bufferstreams_1 = __importDefault(require("bufferstreams"));
const fs_1 = __importDefault(require("fs"));
fs_1.default.createReadStream("./package.json").pipe(new bufferstreams_1.default((err, buf, cb) => {
    if (err)
        console.error(err);
    if (buf)
        console.log(buf.toString());
}));
