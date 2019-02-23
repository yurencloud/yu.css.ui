<h2 align="center">YU.CSS.UI</h2>
<p align="center">纯CSS通用UI模块和组件</p>

<p align="center">
   <img src="https://img.shields.io/npm/v/yu.css.ui.svg" alt="">
    <img src="https://img.shields.io/github/stars/yurencloud/yu.css.ui.svg" alt="">
    <img src="https://img.shields.io/github/issues/yurencloud/yu.css.ui.svg" alt="">
    <img src="https://img.shields.io/github/forks/yurencloud/yu.css.ui.svg" alt="">
    <img src="https://img.shields.io/github/license/yurencloud/yu.css.ui.svg" alt="">
</p>

<p align="center">
  <a href="http://www.yurencloud.com/css/install" target="_blank">使用文档</a>
  |
  <a href="https://github.com/yurencloud/yu.css.ui/tree/master/example/component/"  target="_blank">完整示例</a>
  |
  <a href="http://www.yurencloud.com"  target="_blank">官方网站</a>
</p>


yu.css.ui 纯CSS通用UI模块和组件
yu.css.ui 只写CSS样式和HTML示例，不包含任何JavaScript脚本，在javascript，jquery, vue, react, angular, webpack, npm 下都可以快速使用。只要添加一些简单的脚本逻辑，就可以形成完整的组件。

## 原则

- 不包含任何JavaScript脚本
- 通过className可以显示和控制组件的所有状态
- 一个组件只有一个顶级命名空间，即yu-xxx
- 每个组件css都可以独立拆分直接使用，不需要额外引入重置样式或者变量



> v2.0.0版本修改了目录结构
>
> - src 是项目scss源码
> - css 是scss未压缩编译结果，用于开发测试
> - dist 是css压缩结果，用于生产
> - example 是项目示例代码



## 一、npm 引入 推荐

```shell
npm install --save yu.css.ui
```

### 引入所有组件样式
方式一: 在js中

```javascript
//commonjs
require('yu.css.ui/dist/index.css')

// es6
import 'yu.css.ui/dist/index.css'
```
方式二: 在scss中

引入编译后的css文件

```scss
@import '~yu.css.ui/dist/index.css'
```



引入scss源码，效果和引入编译后的css文件相同 (优点：可以通过变量声明前置，覆盖默认变量)

```scss
/* 改变主题色 */
$primary: #67C23A;

@import '~yu.css.ui/src/index'

```

### 引入单个或多个组件样式

选择性引入，避免引入不使用的组件，减少css打包体积

>  注意：选择性引入时，请不要忘记引入字体图标

方式一: 在js中

```javascript
  import 'yu.css.ui/dist/iconfont/iconfont.css'

  import 'yu.css.ui/dist/component/button.css'

  import 'yu.css.ui/dist/component/radio.css'

  // ...

```




方式二: 在scss中

```scss
  @import '~yu.css.ui/dist/iconfont/iconfont.css'

  @import '~yu.css.ui/dist/component/button.css'

  @import '~yu.css.ui/dist/component/radio.css'

  // ...

```




## 二、使用CDN引入

目前可以通过 [unpkg.com/yu.css.ui](https://unpkg.com/yu.css.ui/dist/index.css) 获取到最新版本的资源，在页面上引入 css 文件即可开始使用。


<link rel="stylesheet" href="https://unpkg.com/yu.css.ui/dist/index.css">



## 三、不引入，直接复制使用

每个组件下面都会有CSS和HTML，点击复制即可使用

按钮
复制按钮HTML

```html
<button class="yu-button primary">按钮</button>
```

复制按钮CSS

[css代码](https://github.com/yurencloud/yu.css.ui/blob/master/dist/component/button.css)


