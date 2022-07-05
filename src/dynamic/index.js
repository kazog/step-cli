/**
 * Create By: Meng
 * Create Date: 2022-07-05
 * Desc: 
 */

/**  import 转 commonJs
 * file: 模块名称
 * let youfile = importToCommonJs('youfile');
 * youfile.then((res) => {
    console.log(res)
    console.log(res.default)
    youfile = res.default;
 */
function importToCommonJs(file='') {
  return import(file);
}

/**  commonJs 转 import
 * file: 模块名称
 * let youfile = importToCommonJs('youfile');
 * youfile.then((res) => {
    console.log(res)
    console.log(res.default)
    youfile = res.default;
 */
function commonJsToImport(file='') {
  return Promise.resolve().then(() => require(file));
}

module.exports = {
  importToCommonJs,
  commonJsToImport
};