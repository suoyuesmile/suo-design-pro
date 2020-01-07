# suo-design-pro 商城

## 简介
这是一个移动端web (H5) 解决方案，以移动端商城为主题，打造一个通用常规解决方案技术模型。

## 开始
```sh
# 克隆项目
git clone https://github.com/suoyuesmile/suo-design-pro.git
# 安装依赖
yarn
# 运行开发环境
yarn serve
```
## 测试
```sh
# 运行测试用例
yarn test
```

## 构建
```sh
## 构建
yarn build
```
## 教程
#### 吃透 Vue 项目开发实践
![img](https://user-gold-cdn.xitu.io/2019/12/30/16f5676f7940d72a?w=1898&h=1206&f=jpeg&s=294508)
#### 吃透移动端 H5 与 hybrid
![img](https://user-gold-cdn.xitu.io/2019/12/24/16f368720d3eb421?w=2206&h=1140&f=jpeg&s=247732)
#### 相关技术文章
| 编号 | 名称                                                                                                                 | 状态 |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ---- |
| 0001 | [吃透移动端 1px]([articals/h5/0001.md](https://juejin.im/post/5df3053ce51d45583d425ada))                             | 完成 |
| 0002 | [吃透移动端 H5 响应式布局]([articals/h5/0002.md](https://juejin.im/post/5df59139518825123e7af459))                   | 完成 |
| 0003 | [吃透移动端 H5 与 hybrid](https://juejin.im/post/5dfadb91e51d45584006e486)                                           | 完成 |
| 0004 | [吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《上》](https://juejin.im/user/59a3e1de51882524401237cf/posts) | 完成 |
| 0005 | [吃透 Vue 项目开发实践｜16个方面深入前端工程化开发技巧《下》]                                                        | 计划 |
## 设计规范
![img](https://user-gold-cdn.xitu.io/2020/1/6/16f7af4b9fb47e90?w=1274&h=1474&f=jpeg&s=111617)
## 功能
### 功能规划
| 编号    | 功能模块 | 名称     | 页面           | 计划 |
| --- | -------- | -------- | -------------- | ---- |
| 1   | 基础功能 | 登陆     | login          | 计划 |
| 2   | 基础功能 | 注册     | register       | 计划 |
| 3   | 通用业务 | 首页展示 | home           | 计划 |
| 4   | 通用业务 | 商城展示 | mall           | 计划 |
| 5   | 电商业务 | 购物车   | cart           | 计划 |
| 6   | 通用业务 | 个人中心 | personal       | 计划 |
| 7   | 通用业务 | 资料填写 | material       | 计划 |
| 8   | 商城业务 | 商品搜索 | good-search    | 计划 |
| 9   | 商城业务 | 商品列表 | good-list      | 计划 |
| 10   | 商城业务 | 商品详情 | good-detail    | 计划 |
| 11  | 商城业务 | 商品订单 | good-order     | 计划 |
| 12  | 通用业务 | 用户画像 | user-portrayal | 计划 |
| 13  | 通用业务 | 消息中心 | message-center | 计划 |

### 基础组件
|     | 类型 | 名称     | 组件名          |
| --- | ---- | -------- | --------------- |
| 1   | 基础 | 颜色     | app-color       |
| 2   | 基础 | 字体     | app-font        |
| 3   | 基础 | 图标     | app-icon        |
| 4   | 触发 | 按钮     | app-button      |
| 5   | 触发 | 单栏     | app-cell        |
| 6   | 选择 | 单选     | app-radio       |
| 7   | 选择 | 多选     | app-check       |
| 8   | 选择 | 弹窗选择 | app-select      |
| 9   | 选择 | 下拉     | app-select-drop |
| 10  | 选择 | 开关     | app-switch      |
| 11  | 选择 | 切换     | app-tab         |
| 12  | 选择 | 评分     | app-rate        |
| 13  | 选择 | 输入框   | app-filed       |
| 14  | 提示 | 提示     | app-toast       |
| 15  | 提示 | 加载     | app-loading     |
| 16  | 提示 | 弹窗     | app-dialog      |

## 参考文档
|     | 技术          | 类型          | 参考文档                                           | 一周快速上手建议时间 |
| --- | ------------- | ------------- | -------------------------------------------------- | -------------------- |
| 1   | vue           | mvvm 框架     | https://cn.vuejs.org/index.html                    | 3 天                 |
| 2   | vue-cli4      | 脚手架        | https://github.com/vuejs/vue-cli/tree/v3#vue-cli-- | 空闲研究             |
| 3   | vue-devtools  | 调试工具      | https://github.com/vuejs/vue-devtools              | 空闲研究             |
| 4   | vue-router    | 路由          | https://router.vuejs.org/zh/                       | 1 天                 |
| 5   | vuex          | 状态管理      | https://vuex.vuejs.org/zh/                         | 1 天                 |
| 6   | sass          | CSS 预编译    | https://www.sasscss.com/getting-started/           | 1 小时               |
| 7   | vant          | 组件库        | https://youzan.github.io/vant/#/zh-CN/intro        | 半天                 |
| 8   | axios         | 获取 API 数据 | https://github.com/axios/axios                     | 空闲研究             |
| 9   | eslint        | 静态检查      | https://eslint.org/                                | 边开发边理解         |
| 9   | pug           | 模版          | https://juejin.im/post/5e0202fc6fb9a0165721e39a    | 自行研究             |
| 9   | rem & pxToRem | 屏幕适配      | https://juejin.im/post/5df59139518825123e7af459    |                      |
| 9   | jest          | 自动化测试    | https://juejin.im/post/5df59139518825123e7af459    | 自行研究             |


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Suo Shao
