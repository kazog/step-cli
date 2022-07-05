
# 手脚架开发

$ npm install fs-extra // 文件处理
$ npm install commander // 命令行工具

$ npm link // 脚手架的调试方法 

$ npm unlink linkname // 删除 link

#!/usr/bin/env node  // 查找电脑内node环境来执行此文件，注意必须放在文件开头。

在package.json 中添加:

"bin": { 
  "step-cli": "./bin/index" 
}