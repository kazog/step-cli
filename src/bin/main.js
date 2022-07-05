/**
 * Create By: Meng
 * Create Date: 2022-07-04
 * Desc: 
 */

const { program, Option } = require('commander');
const {version} = require('../../package.json');


program.version(version, '-v, --version').usage();

program
  .addOption(new Option('-s, --secret').hideHelp())
  .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
  .addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']))

// 初始化项目模板
program
  .command('create <template-name> <project-name>')
  .description('create a new project from a template')
  .action((templateName, projectName, cmd) => {
    // 输入参数校验
    console.log(process.argv);
  });
  console.log(version);