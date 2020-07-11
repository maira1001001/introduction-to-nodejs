/**
 *
 * purpose: try to read from a file in a bad way
 *
 * @format
 */

const fs = require('fs');
const path = require('path');

// bad way: const entrepreneursLocation = './entrepreneurs';
// bay way two: const entrepreneursLocation = __direname + './entrepreneurs';

const entrepreneursLocation = path.join(__dirname, 'entrepreneurs.json');

const getEntrepreneurs = () => {
  const entrepreneurs = fs.readFileSync(entrepreneursLocation).toString();
  return JSON.parse(entrepreneurs);
};

const saveEntrepreneur = (entrepreneur) => {
  fs.writeFileSync(entrepreneursLocation, JSON.stringify(entrepreneur));
};

module.exports = {
  getEntrepreneurs,
  saveEntrepreneur,
};
