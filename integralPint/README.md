# 介绍

不同于一般的本地开发，无极开发者工具使用[HMR](https://webpack.docschina.org/guides/hot-module-replacement/)的方式，实现本地开发产物与线上页面的远程调试。


当你遇到以下几种情况，可能需要用上开发者工具：

- **组件开发** 官方提供的组件列表不能符合业务需求，业务方需要开发匹配需求的组件

- **页面开发** 页面不适合使用低代码拖拽布局的方式生成，需要全页面进行开发替换

- **云函数** 无极 server 托管和运行的js函数，可供页面/组件调用。可执行增删查改、HTTP请求等操作。

你需要的是：

1. 无极上创建一个项目，记下它的 projectId （cli工具将挂载在它下面，可访问它的数据）
2. 本地安装 wuji-cli：`npm install -g @tencent/wuji-cli` ( 需要 >= `3.1.0` )
3. 创建项目仓库：详情请参考 `wuji init` 命令介绍
4. 开发你的组件、页面、云函数
5. 本地开发、测试、发布（见下文 wuji-cli 用法）
6. 线上即可访问

<br/>

## 环境依赖

- [node.js v10+](https://nodejs.org/dist/v10.23.0/)
- npm。并且需要将npm源指向公司npm源
```js
  npm config set registry https://mirrors.tencent.com/npm/
```
- @tencent/wuji-cli(3.3版本及以上)

<br/>

## 使用 wuji-cli

【注意】使用 cli 时，可选配置环境变量：

- `rtx`: **必须配置！** 本地调试时注入到 js 全局变量的账号
- `PORT`: 无极系统端口，默认 `9998`（同时会占用 `9999`（默认端口+1） 端口）
- `WUJI_PROXY`: 设置请求IDC网络服务的代理，默认是 `http://proxy.wuji.oa.com`

```sh
# Mac & Linux
PORT=80 rtx=你的RTX wuji [参数...]

# Windows
SET PORT=80
SET rtx=你的RTX
wuji [参数...]
```

## 系列文档参考

- [组件开发](http://v.oa.com/xy/docs/devtools/start-component.html)
- [页面开发](http://v.oa.com/xy/docs/devtools/start-page.html)
- [云函数开发](http://v.oa.com/xy/docs/devtools/start-func.html)
- [全局变量/资源定义](http://v.oa.com/xy/docs/devtools/globals.html)
