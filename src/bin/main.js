/**
 * Create By: Meng
 * Create Date: 2022-07-04
 * Desc: 
 */


const { program } = require('commander');
const { version } = require('../../package.json');
const { actions } = require('../modules/config')


let UsageDesc = '\nUsages:';

for (const key in actions) {
  const action = actions[key];
  
  UsageDesc += `\n  ${action.usage.join()}`;
  
  program.command(key) //配置命令的名字
    .alias(action.alias) // 命令的别名
    .description(action.desc) // 命令对应的描述
    .action(() => {  //动作
      if (action === '*') {  //访问不到对应的命令 就打印找不到命令
        console.log(action.desc);
      } else {
        console.log(action);
        // 分解命令 到文件里 有多少文件 就有多少配置 create config
        // lee-cli create project-name ->[node,lee-cli,create,project-name]
        console.log(process.argv);
      }
    });
}

// 监听用户的help事件
program.on('--help', () => {
  console.log(UsageDesc);
})

program.version(version, '-v, --version').parse(process.argv); // process.argv 是用户在命令行中传入的参数