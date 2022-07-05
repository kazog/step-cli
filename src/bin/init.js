/**
 * Create By: Meng
 * Create Date: 2022-07-05
 * Desc: 
 */

console.log('Create New Project');

const {prompt} = require('inquirer');

prompt([
  {
    type: 'confirm',
    name: 'test',
    message: '你确定使用这个吗?',
    default: true
  }
]).then((answers) => {
  console.log('结果为:')
  console.log(answers)
});
