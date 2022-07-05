#!/usr/bin/env node

/**
 * Create By: Meng
 * Create Date: 2022-07-04
 * Desc: 
 */

const { program } = require('commander');
const { actions } = require('./src/modules/config');
const { version } = require('./package.json');

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
        require(`./src/bin/${tag}`);
      }
    });
}

// 监听用户的help事件
program.on('--help', () => {
  console.log(UsageDesc);
})

program.version(version, '-v, --version').parse(process.argv); // process.argv 是用户在命令行中传入的参数
