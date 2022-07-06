/**
 * Create By: Meng
 * Create Date: 2022-07-05
 * Desc: 
 */

const configs = require('../modules/config');
const { importToCommonJs } = require('../dynamic/index');
const { Constants } = require('../modules/constants');
const inquirerES = importToCommonJs('inquirer');

// console.log('Create New Project');

inquirerES.then((res) => {
  const inquirer = res.default || {};
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'create',
      message: '选择项目语言?',
      choices: configs.langues
    }
  ]).then((answer) => {
    let value = answer.create || '';
    Constants.langue = value;
    // value = value.toLowerCase();
    // console.log('结果为: ' + value);
    require(`./create/${Constants.env}`);
  });
});
