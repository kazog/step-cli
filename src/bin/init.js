/**
 * Create By: Meng
 * Create Date: 2022-07-05
 * Desc: 
 */

const configs = require('../modules/config');
const { Constants } = require('../modules/constants');
const { importToCommonJs } = require('../dynamic/index');
const inquirerES = importToCommonJs('inquirer');

// console.log('Create New Project');

inquirerES.then((res) => {
  const inquirer = res.default || {};
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'create',
      message: '选择您要创建的项目类型?',
      choices: configs.items
    }
  ]).then((answer) => {
    let value = answer.create || '';
    Constants.env = value;
    value = value.toLowerCase();
    console.log('结果为: ' + value);
    require(`./create/${value}`);
  });
});
