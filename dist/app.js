"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_demo_1 = __importDefault(require("sdk-demo"));
const client = new sdk_demo_1.default({
    apiKey: "sdfd",
});
client.getPostById(27).then((p) => {
    console.log(p);
});
