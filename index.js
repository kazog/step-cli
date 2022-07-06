#!/usr/bin/env node

/**
 * Create By: Meng
 * Create Date: 2022-07-04
 * Desc: 
 */

const { program } = require('commander');

const { version } = require('./package.json');
const { actions, items } = require('./src/modules/config');
const { Constants } = require('./src/modules/constants');
const { importToCommonJs } = require('./src/dynamic/index');
const inquirerES = importToCommonJs('inquirer');

let UsageDesc = '\nUsages:';

for (const key in actions) {
  const action = actions[key];

  UsageDesc += `\n  ${action.usage.join()}`;

  program.command(key) // 命令名称
    // .alias(action.alias) // 命令的别名
    .description(action.desc) // 命令的描述
    .action(() => {
      if (key === '*') { // 通配符
        console.log(action.desc);
      } else {
        // console.log(process.argv);
        const tag = process.argv[2];
        _selectType(tag);
      }
    });
}

// 监听用户的help事件
program.on('--help', () => {
  console.log(UsageDesc);
})

program.version(version, '-v, --version').parse(process.argv); // process.argv 是用户在命令行中传入的参数

// 选择项目类型
function _selectType(tag='vue') {
  inquirerES.then((res) => {
    const inquirer = res.default || {};
    inquirer.prompt([
      {
        type: 'rawlist',
        name: 'create',
        message: '选择您要创建的项目类型?',
        choices: items
      }
    ]).then((answer) => {
      let value = answer.create || '';
      value = value.toLowerCase();
      Constants.env = value;
      
      require(`./src/bin/${tag}`);
    });
  });
}