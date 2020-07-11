/** @format */

const program = require('commander');
const { prompt } = require('inquirer');

const { getEntrepreneurs, saveEntrepreneur } = require('./api');
const newEntrepreneursPrompt = require('./prompt');
// EQUAL: const { getEntrepreneurs } = require('./entrepreneursApi');
// you do not have to think about this

program
  .command('new')
  .alias('n')
  .description('Add a new entrepreneur')
  .action(() => {
    prompt(newEntrepreneursPrompt).then(({ name, products, vision }) => {
      const entrepreneurs = getEntrepreneurs();
      entrepreneurs[name] = { name, products, vision };
      saveEntrepreneur(entrepreneurs);
    });
  });

program
  .command('list')
  .alias('l')
  .description('list all entrepreneurs')
  .action(() => {
    const entrepreneurs = getEntrepreneurs();
    prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Select an entrepreneur',
        choices: Object.keys(entrepreneurs),
      },
    ]).then(({ selected }) => {
      const entrepreneur = entrepreneurs[selected];
      console.log(JSON.stringify(entrepreneur, null, 2));
    });
  });

program.parse(process.argv);
