/**
 * /*
 * fs: filesystem module to interact with file on a machine
 *
 * @format
 */

const fs = require("fs");

const file = fs.readFileSync("./lib.js", { encoding: "utf-8" }).toString();

fs.writeFileSync("./lib.js", "We have a new pet"); // It has complete overwritten the file with this message
