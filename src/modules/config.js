/**
 * Create By: Meng
 * Create Date: 2022-0704
 * Desc: 
 */
//  const { name, version } = require('../../package.json');


const actions = {
  init: {
    alias: 'create', // 别名
    desc: 'create new project/新建项目', // 描述
    usage: [ // 用法
      'step init <name> <version>'
    ]
  },
  page: {
    alias: 'view',
    desc: 'create new page/创建页面',
    usage: [
      'step page <path/name>'
    ]
  },
  component: {
    alias: 'widget',
    desc: 'create new component/创建组件',
    usage: [
      'step component <path/name>'
    ]
  },
  '*': {
    alias: '**',
    desc: 'command not found/命令不正确',
    usage: [
      'step init/page/component'
    ]
  }
};

// const configs = {
//   actions
// };
// export default configs;

module.exports = {
  actions
};
