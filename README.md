
# 手脚架开发

$ npm install fs-extra        // 文件处理
$ npm install commander       // 命令行工具
$ npm install inquirer        // 交互式命令行用户界面
$ npm install ora             // 进度转轮-控制台进度美化
$ npm install chalk           // 控制台打印

$ npm link // 脚手架的调试方法 

$ npm unlink linkname // 删除 link

#!/usr/bin/env node  // 查找电脑内node环境来执行此文件，注意必须放在文件开头。

在package.json 中添加:

    "bin": { 
      "step-cli": "./bin/index" 
    }
    "type": "module", // 使用ES的加载方式


process.argv:
process.argv[0] Node进程的可执行文件所在的绝对路径 
process.argv[1] 当前执行的JavaScript文件路径
process.argv[2] 命令后的 输入 如：step init name 中的name

