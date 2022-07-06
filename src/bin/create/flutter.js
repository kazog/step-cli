/**
 * Create By: Meng
 * Create Date: 2022-07-05
 * Desc: 
 */

 const { importToCommonJs } = require('../../dynamic/index');
 const { Constants } = require('../../modules/constants');
 
 const oraES = importToCommonJs('ora');
 
 oraES.then((res) => {
   const ora = res.default || {};
 
   const spinner = ora(`${Constants.env} 项目构建中...`).start();
   setTimeout(() => {
     spinner.color = 'blue';
     spinner.text = '构建中...';
     // 成功
     spinner.succeed('创建成功');
   }, 2000);
 });
 
 