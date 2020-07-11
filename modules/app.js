/** @format */

const message = require("./message");
const { greetingMessage, awarenessMessage } = require("./multiplemessages");
const complaint = require("./functionModule");

const {
  complaint: renameComplaint,
  complaint1,
  complaint2,
  complaint3,
  complaint4,
} = require("./multipleFunctions");

console.log(message);

console.log(greetingMessage);

console.log(awarenessMessage);

complaint();

complaint1();

complaint2();

complaint3();

complaint4();

renameComplaint();
