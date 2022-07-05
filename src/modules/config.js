/**
 * Create By: Meng
 * Create Date: 2022-0704
 * Desc: 
 */
//  const { name, version } = require('../../package.json');


const actions = {
  init: {
    alias: 'create', // 别名
    desc: 'create project variable', // 描述
    usage: [ // 用法
      'step init <name> <version>'
    ]
  },
  page: {
    alias: 'view',
    desc: 'create project variable',
    usage: [
      'step page <path/name>'
    ]
  },
  component: {
    alias: 'widget',
    desc: 'create project variable',
    usage: [
      'step component <path/name>'
    ]
  }
};

module.exports = {
  actions
};
