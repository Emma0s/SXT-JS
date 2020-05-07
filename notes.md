# [JavaScript从入门到精通](https://www.bilibili.com/video/av29885002)

## 初探 JavaScript 魅力

### JavsScript 是什么

- 网页特效原理
  - JavaScript 就是修改样式（文档）
- 编写 JS 的流程
  - 布局：HTML + CSS 
  - 属性：确定要修改的属性
  - 事件： 确定用户 做哪些操作（产品设计）
  - 编写 JS ：在事件中，用 JS 来修改页面元素的样式

### 第一个 JS 特效：鼠标提示框

- 分析效果实现原理

  - 样式：`div` 的 `display / none`
  - 事件：`onmouseover / onmouseout`
  - 动手编写效果

- 特效基础

  - 事件驱动：`onmouseover`
  - 元素属性操作：`obj.style.[...]`
  - 特效实现原理概括：响应式用户操作，对页面元素样式修改

- 兼容性问题 

  ```js
  // div2.style.display='block'; // 部分浏览器不兼容
  document.getElementById('div2').style.display='block'; // 所有浏览器兼容
  ```

- 函数

  - 制作更复杂的效果
  - 直接在事件内写代码会很乱
    - 引入 `function()` 函数的基本形式
    - 把 JS 标签里放入到函数里，类似于 css 里的 `class`
    - 变量的使用：别名
  - 定义和调用
    - 函数定义：告诉系统有这个函数，不会执行
    - 函数调用：执行函数里面的代码
    - 关系和区别

### 函数传参

- 改变背景颜色

  - 函数传参：参数就是占位符
    - 函数里面变量用传参

- 改变 div 的任意样式

  - 操纵属性的第二种方式
    - 要修改的属性不确定时：` 元素.style[ 变量/字符串 ] = 变量/字符串 `
    - JS 中用 `.` 的地方都可以用 `[]` 代替;
    - 字符串变量区别和关系 ：带引号是字符串，不带是变量
  - 将属性名作为参数传递

- style 与 className 

  - ` 元素.style.属性 = 变量/字符串 ` 
    - style 是修改行内样式
  - 行内样式优先级最高，之后再修改 className 不会有效果
  - 建议：只操作一种样式，要么只操作 style ，要么只操作 className

### 提取行间事件

- 提取事件
  - 为元素添加事件
    - 事件和其它属性一样，可以用 JS 添加：`元素.事件 = 函数名/函数;`
      - 不能加括号，加括号直接执行函数
    - `window.onload` 的意义：等待页面加载完成再执行 JS
    - 行为( js )、样式( css )、结构( html ) 三者分离
- 获取一组元素
  - ` 元素.getElementsByTagName('标签名') `
    - 数组的使用
    - 数组的属性
  - 全选的实现

### 导航栏选项卡

- 按钮的实现

  - 添加事件
    - this 的使用: 指当前发生事件的元素
  - 先清空所有按钮，再选中当前按钮

- 内容的实现（ul）

  - 先隐藏所有 ul，再显示当前 ul
    - 索引值的使用：什么时候用索引值
    - HTML 添加 index 会被 FireFox 过滤
    - JS 添加 index

### JS 简易日历

- 程序实现思路

  - 类似于选项卡，只是下面只有一个div
  - innerHTML 的使用

- 字符串拼接

  - 作用：拼接两个字符串
  - 问题：拼接中的优先级
    - 就近相加, 字符串后面数字相加要加括号

## JavaScript 基础

### JavaScript 组成

- ECMAScript：解释器、编译器（几乎所有兼容）
- DOM：Document Object Model，HTML，`document`（大部分兼容）
- BOM：Browser Object Model，浏览器，`window`（完全不兼容）
  - 各组成部分的兼容性、兼容性问题的由来

### 变量类型

- 类型：`typeof` 运算符
  - 用法：`typeof 元素`返回变量的类型
  - 常见类型：
    - `number` 、`string` 、`boolean` 、`undefined`（未定义或定义未使用）、`object`、`function`
- 一个变量应该只放一种类型的数据

### 变量类型转换

- 数据类型转换

  - 例子：计算两个文本框的和

  - 显式类型转换（强制类型转换）

    - `parseInt()`  去除小数、`parseFloat() ` 保留小数：从左至右提取数字，遇到不是数字跳出

    - `NaN ` 的意义和检测：`Not a Number`

    - NaN： NaN 和任何值都不相等，包括它自己

      - 使用 ` isNaN()` 检测是否是全是数字

    - ```
      Number() 转换数值，String() 转换字符串，Boolean() 转换布尔值
      ```

  - 隐式类型的转换
      
    - ```js
      5 + null    // 返回 5         因为 null 被转换为 0
      "5" + null  // 返回 "5null"   因为 null 被转换为  "null"
      "5" + 2     // 返回 52        因为 2 被转换为 "2"
      "5" - 2     // 返回 3         因为 "5" 被转换为 5
      "5" * "2"   // 返回 10        因为 "5" 和 "2" 被转换为 5 和 2
      ```

- 更多可用于将数值转换为字符串的方法：

  | 方法            | 描述                                                   |
  | :-------------- | :----------------------------------------------------- |
  | toExponential() | 返回字符串，对数字进行舍入，并使用指数计数法来写。     |
  | toFixed()       | 返回字符串，对数字进行舍入，并使用指定位数的小数来写。 |
  | toPrecision()   | 返回字符串，把数字写为指定的长度。                     |

### 变量的作用域和闭包

- 变量作用域（作用范围）
  - 局部变量、全局变量
- 什么是闭包？
  - **子函数可以使用父函数中的局部变量**

### 命名规范

| 类型       | 前缀 | 类型（英文） | 实例         |
| ---------- | ---- | ------------ | ------------ |
| 数组       | a    | Array        | aItems       |
| 布尔值     | b    | Boolean      | bIsComplete  |
| 浮点数     | f    | Float        | fPrice       |
| 函数       | fn   | Function     | fnHandler    |
| 整数       | i    | Integer      | iItemCount   |
| 对象       | o    | Object       | oDiv1        |
| 正则表达式 | re   | RegExp       | reEmailCheck |
| 字符串     | s    | String       | sUserName    |
| 变体变量   | v    | Variant      | vAnything    |

## 深入 JavaScript

### 函数传参与行间样式

- **取非行间样式（不能用来设置）：**

  - `obj.currentStyle[attr]` 只兼容 IE ，返回小数

  - `getComputedStyle(obj, false)[attr]`，返回小数

  - ```js
    // 解决兼容问题
    // 封装获取计算后元素样式函数
    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, '') [name];
        }
    }
    ```

  - 复合样式：`background` / `border ` 要用具体样式名 `backgroundColor ` 等

  - 单一样式：` width` / `height` / `position`

### 数组基础操作

- 数组的方法

  - 添加
    - `push(元素)`，从尾部添加
    - `unshift(元素)`，从头部添加
  - 删除
    - `pop()`，从尾部删除
    - `shift()`，从头部删除

- 排序

  - `数组.sort([比较函数])`，排序一个数组，只有数组能使用

    - 排序一个字符串数组，不加比较函数，**默认按照 ASCII 码排序**

    - 排序一个数字数组，加数字比较大小函数

    - ```js
      // 正序比较函数 数字比大小 字符比ASCII值大小
      function positiveSort(n1, n2) {
          if (isNaN) {
              if (n1 > n2) {
                  return 1;
              }
              if (n1 < n2) {
                  return -1;
              }
              if (n1 === n2) {
                  return 0;
              }
          } else {
              return n1 - n2;
          }
      }
      ```

- 转换类

  - `数组.concat(数组2)`
    - 连接两个数组，可用于深度复制
  - `数组.join(分隔符)`
    - 用分隔符，组合数组元素，生成字符串
    - 字符串 `split`
  - `数组.reverse()`
    - 颠倒数组中元素的顺序

- `数组.slice(start,end)`

  - 从已有数组中返回选定元素，可用于深度复制
  - start 为负数时，和数组长度相加再查找

-  `splice`：先删除，后插入

  - `数组.splice(起点,长度,元素)`

  - 删除

    - `数组.splice(起点,长度)`

  - 插入

    - `数组.splice(起点,0,元素...)`

  - 替换

    - `数组.splice(起点,长度,元素)`
  
- ECMAScript 两个关于位置的方法
  
  - `arrayObject.indexOf(searchvalue,startIndex)`
    - 从startIndex 开始向后查找，默认值为 0
    - 返回 number 查找项在数组中的位置，没找到返回-1
  - `arrayObject.lastIndexOf(searchvalue,startIndex)`
    - 从startIndex 开始向前查找，默认值为 0
    - 返回 number 查找项在数组中的位置，没找到返回-1

- 数组名作为变量（遍历数组中的数组）：

  ```js
  var arr1=new Array(); 
  var arr2=new  Array(); 
  var arrlist= new Array(); //存放以上数组
  arrlist.push(arr1);
  arrlist.push(arr2);
  //循环遍历arrlist，就可以达到你要的效果
  ```
  
## 定时器的使用

### 定时器的作用

- 开启定时器

  - `setInterval(函数, 间隔时间)` 间隔型，函数后面不能带括号和传参
  - `setTimeout(函数, 延时时间)`   延时型
  - 两种定时器的区别，定时器要 `window.onload` 完一秒后才执行

- 停止定时器

  - `clearInterval(定时器名字)`
  - `clearTimeout(定时器名字)`

### 数码时钟

- 效果思路

- 获取系统时间

  - `new Date` 对象
  - `getHours / getMinutes / getSeconds`

- 显示系统时间

  - 字符串连接
  - 空位补零

- 设置图片路径

  - `str[i]`：取出字符串中的第 i 个值，不兼容 ie7
  
- `charAt(i)` 方法 ：取出字符串中的第 i 个值，兼容各种浏览器
  
- 设置路径：`"url('img/0.png')"`
  
- JavaScript 中的 String 方法

  - `obj.charAt(index)`
    - 返回index位置的字符
  - `obj.charCodeAt()`
    - 返回index位置的字符编码
  - `obj.indexOf("str")`
    - 顺序搜索str，返回其位置，未找到返回-1
  - `obj.lastIndexOf("str")`
    - 倒序搜索str，返回其位置，未找到返回-1
  - `slice(start,end)`：同数组
  - `substring(start,end)`：同上，区别在于参数为负数时自动转换为0，并且较小的数为起始位
  - `substr(start,len)`：同上，len 表示截取的长度
  
### Date 对象其它方法

| 方法              | 描述                                    |
| :---------------- | :-------------------------------------- |
| getDate()         | 获得以数值计（1-31）的日                |
| getDay()          | 或者以数值计（0-6）的周                 |
| getFullYear()     | 获得四位的年（yyyy）                    |
| getHours()        | 获得时（0-23）                          |
| getMilliseconds() | 获得毫秒（0-999）                       |
| getMinutes()      | 获得分钟（0-59）                        |
| getMonth()        | 获得月（0-11）                          |
| getSeconds()      | 获得秒（0-59）                          |
| getTime()         | 获得时间（1970 年 1 月 1 日以来的毫秒） |

### 延时提示框

- 效果演示

- 原来的方法

  - 移入显示，移出隐藏

- 移出延时隐藏

  - 移入下面 `div` 后，还是隐藏

- 简化代码

  - 合并两个相同的 `mouseover` 和 `mouseout`
  - 连续 `a=b=c=function()`  两个事件共使用一个函数

### 无缝滚动

- 效果演示

- 物体运动基础

  - 让 `div` 移动起来
  - `offsetLeft/offsetTop` 的作用：获取当前对象的左边距/上边距
  - `offsetWidth/offsetHeight`
  - 用定时器让物体连续移动：
    - `innerHTML` 拼接两节图片, 宽度后面加 `px` 才会生效
    - `overflow:hidden;` 隐藏元素外的内容

- 改变滚动的方向

  - 修改 `speed`
  - 修改判定条件
  - 多次点击越来越快：`if (!timer) `或`clearInterval(timer);` 避免重复调用

- 鼠标移入暂停

  - 移入关闭定时器
  - 移出重新开启定时器

## DOM 基础

- DOM 节点
  - 获取子节点
    - `childNodes`：不兼容高版本，用`nodeType` 兼容
      - 获取文本节点`( nodeType == 3)` 和元素节点`( nodeType == 1)`
    - `children`：**只获取元素节点，兼容**
  - `parentNode`：查找父节点
    - 例子：点击链接，隐藏整个 `li`
  - `offsetParent`：查找定位父级
    - 例子：获取元素在页面上的实际位置
  - 首尾子节点
    - `firstElementChild` 高版本使用
    - `lastChild `/ `lastElementChild` 
  - 兄弟节点
    - `nextSbling` / ` nextElementSibling`
    - `previousSibling  `  /  `previousElementSibling`

### 操作元素属性

- 操作元素属性
  - 元素属性操作
    - 第一种：`oDiv.style.display = 'block';`
    - 第二种：`oDiv.style['display'] = 'block';`
    - 第三种：Dom 方式
  - Dom 方式操作元素属性
    - 获取：`getAttribute(名称)`
    - 设置：`setAttribute(名称, 值)`
    - 删除：`removeAttribute(名称)`

### DOM 元素灵活查找

- 用 className 选择元素

  - 如何用 className 选择元素

    - 选出所有元素
    - 通过 className 条件筛选

  - 封装成函数：

    ```js
    // 通过 className 查找元素
    function getByClass(oParent, sClass) {
    	var aResult = [];
    	var aEle = oParent.getElementsByTagName('*');
    	
    	for(var i = 0; i < aEle.length; i++) {
            if (aEle[i].className == sClass) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
    ```  

## DOM 操作应用

### 创建、插入和删除元素

- 创建 DOM 元素

  - `document.createElement(标签名)`	创建一个节点，不渲染
  - `父级.appendChild(节点)`    **删除原有子节点**，再添加子节点，并渲染
    - 例子：为 `ul` 插入 `li`

- 插入元素

  - `父级.insertBefore(节点, 原有节点)`	在已有元素前插入
    - 例子：倒叙插入 `li`

- 删除 DOM 元素

  - `父级.removeChild(节点)` 	删除一个节点
    - 例子：删除 `li`

### 文档碎片

- 文档碎片理论上可以提高 DOM 操作性能

- 文档碎片原理

- `document.createDocumentFragment()`：Vue 、MVVM 还有用到

## DOM操作应用高级

### 表格标签

| 表格       | 描述                   |
| :--------- | :--------------------- |
| \<table>    | 定义表格               |
| \<caption>  | 定义表格标题。         |
| \<th>       | 定义表格的表头。       |
| \<tr>       | 定义表格的行。         |
| \<td>       | 定义表格单元。         |
| \<thead>    | 定义表格的页眉。       |
| \<tbody>    | 定义表格的主体。       |
| \<tfoot>    | 定义表格的页脚。       |
| \<col>      | 定义用于表格列的属性。 |
| \<colgroup> | 定义表格列的组。       |

### 表格应用

- 获取

  - `tBodies / tHead / tFoot / rows / cells `

    ```js
    var oTab = document.getElementById('tab1');
    alert(oTab.tBodies[0].rows[1].cells[1].innerHTML);
    ```

- 隔行变色

  - 鼠标移入高亮

- 添加/删除一行

  -  DOM 方法的使用

- 搜索

  - 版本1：基础版本 -- 字符串比较
  - 版本2：忽略大小写 -- 大小写转换 `toLowerCase()/toUpperCase()`，返回字符串
  - 版本3：模糊搜索 -- `search()` 的使用，没找到返回 -1，找到则返回位置
  - 版本4：多关键词 -- `split()` 分割字符串，返回数组
  - 高亮显示、筛选

- 排序

  - 移动 `li` ，使用`appendChild()`： 删除原有 `li`，尾部新增 `li`
  - 元素排序：元素集合转换成数组 -- `sort()` 排序 -- `appendChild()`插入

### 表单应用

- 表单基础知识
  - 什么是表单
    - 向服务器提交数据，比如：用户注册
  - `action ` ： 提交到哪里
- 表单事件 
  - `onsubmit`：提交时发生
  - `onreset`：重置时发生
- 表单内容验证
  - 阻止用户输入非法字符：阻止事件
  - 输入时、失去焦点时验证：`onkeyup` 和`onblur`
  - 提交时检查：`onsubmit`
  - 后台数据检查

## JS 运动基础

### 运动基础

- 让 `div` 动起来
- 速度：物体运动快慢
- 运动中的 Bug
  - 不会停止
  - 速度取某些值会无法停止
  - 到达位置后点击还会运动
  - 重复点击速度加快
- 匀速运动
  - 速度不变

### 运动框架及应用

- 运动框架

  - 在开始运动时，关闭已有定时器
  - 把运动和停止隔开：`if / else`

- 运动框架实例

  - 例子1：“分享到” 侧边栏
    - 通过目标点，计算速度值
  - 例子2：淡入淡出图片
    - 用变量储存透明度
    - `filter:alpha(opacity=30); opacity: 0.3;` IE 用前者

### 缓冲运动

- 逐渐变慢，最后停止

- 距离越大速度越大，**速度取整**

  - 速度由距离决定
  - 速度 = (目标值-当前值)/缩放系数
  - `Math.ceil`：向上取整
  - `Math.floor`：向下取整

- 例子：缓冲菜单

  - Bug：速度取整  `Math.ceil`、`Math.floor`
  - 跟随页面滚动的缓冲侧边栏
    - 潜在问题：目标不是整数时
    - 目标取整：`parseInt()`
  - ` scrollTop = document.documentElement.scrollTop || document.body.scrollTop;`
    - `document.documentElement.scrollTop`：IE、Firefox
    - `document.body.scrollTop`：chrome

- `Math.random()`

  - 返回一个等于0小于1的一个随机浮点数
  - 说明：求 n到 m之间的**随机整数的公式**
    - `random = Math.floor(Math.random()*(m-n+1)+n)`

### 运动的停止条件

- 运动终止条件
  - 匀速运动：两点足够近（直接改位置），`Math.abs()` 取绝对值
  - 缓冲运动：两点重合（取整后）

## JS 运动应用

### 多物体运动框架

- 多个物体同时运动
  - 例子：多个 `div` ，鼠标移入变宽
    - 单定时器，存在问题
    - 每个 `div` 一个定时器
- 多物体运动框架
  - 定时器作为物体的属性
  - 参数的传递：物体、目标值
  - 例子：多个 `div` 淡入淡出
    - 所有东西都不能公用
    - 属性与运动对象绑定：速度、其它属性值（如透明度等）

### 任意值运动框架

- `offset` 属性的 Bug

  - 获取的是整个盒子模型的大小，有边框的 div 变宽
    - 用 `obj.currentStyle('name')` 和 `getComputedStyle(obj,'').name`代替 `offset`

- 原有运动框架的问题

  - 只能让某个值运动起来
  - 如果想让其他值运动起来，要修改程序

- 扩展的运动框架

  - 运动属性作为参数
  - 封装 `opacity `
    - 小数精度问题：`Math.round()`  四舍五入取整  

- 笔记：不让子元素继承父元素的 `opacity ` 属性

  - 使用 `rgba(R,G,B,opacity)`  间接的设定 `opacity` 的值，这个属性不会向下继承
  - 或者把 `opacity` 属性放到同级元素实现

- 笔记：父级使用相对定位，子级才能在范围内绝对定位

## JS 运动中级

### 链式运动框架

- 回调函数：`startMove(obj, attr, iTarget, fn)`
  - 运动停止时，执行函数
  - 运动停止时，开始下一次运动
  - 例子：土豆网右下角菜单

### 完美运动框架

- 多个值同时变化：`startMove(obj, json)` 

  - `setStyle` 同时设置多个属性
    - 参数传递：
      - `JSON` 的使用 
      - `for in` 遍历属性

- 运用到运动框架

- 检测运动停止

  - 标志变量

- 例子：伸缩同时淡入淡出的菜单

### 运动框架总结

- 运动框架演变过程
  - `startMove(iTarget)` ：运动框架
  - `startMove(obj, iTarget)` ：多物体
  - `startMove(obj, attr, iTarget)` ：任意值
  - `startMove(obj, attr, iTarget, fn)` ：链式运动
  - `startMove(obj, json)` ：多值运动
  - `startMove(obj, json, fn)` ：完美运动框架
    
## JS事件基础

### Event 对象和事件冒泡

- 什么是 Event 对象
  - 用来获取鼠标/键盘事件的信息：**鼠标位置、键盘按键**
  - 例子：获取鼠标位置：`clientX`
  - `document` 的本质是整个网页：`document.childNodes[0].tagName = '<!DOCTYPE>'` 
    - `body` 不加事件，因为没有内容就没高度
  
- 获取 `Event` 对象**（兼容性写法）**
  
  - `var oEvent = ev||event;`  火狐用 `ev` / IE 用 `event`
  - 事件函数把事件对象最为参数传入：`btn.onclick = function(ev) { var oEvent = ev||event;}`
  
- 事件流
  - 事件流冒泡：事件往父级传递
    - 取消冒泡：`oEvent.cancelBubble = true`
    - 例子：仿 `select` 控件
    - `DOM` 事件流

### 鼠标事件 

- 鼠标位置
  - 可视区位置：`clientX`、`clientY`
  
  - 例子：跟随鼠标的 `Div`
    
    - 消除滚动条的影响：**可视区**与**页面顶部**的距离

### 键盘事件

- `keyCode`
  
  - 获取用户按下键盘的哪个键：`onkeydown` / `onkeyup`
  - 例子：键盘控制 `Div` 移动
  
- 其它属性
  - `ctrlKey`、`shiftKey`、`altKey`
  - 例子：提交留言
    - 回车提交
    - CTRL + 回车 提交

## JS 事件中级

### 默认事件
  
- 阻止默认事件
  - 普通写法：`return false;`
  - 例子1：屏蔽右键菜单
    - ` document.oncontextmenu = function (ev) { return false; }`
    - 弹出自定义右键菜单
  - 例子2：只能输入数字的输入框
    - ` oTxt.onkeydown = function (ev) { return false; }`
    - `keydown`、`keyup` 事件区别
  
### 拖拽

- 简单拖拽
  - 拖拽原理
    - 鼠标按下位置到 div 距离不变
    - 三个事件：` onmousedown` `onmousemove` `onmouseup`
  
- 靠谱拖拽
  - 原有拖拽的问题：移动太快鼠标会移出 div
    - 直接给 `document` 加事件
  - FireFox 下，空 Div 拖拽 Bug
    - 阻止默认事件：`onmousedown {return false}`
  - 防止拖出页面
    - 修正位置：在可视区内  

## JS 事件高级应用

### 事件绑定

- DOM 方式：
  - `addEventListener(事件名称, 函数, 捕获)`
  - `removeEventListener(事件名称, 函数, 捕获)`
  
- 何时使用绑定：多人合作

- 绑定事件和 `this`

- 绑定匿名函数，会无法删除  

### 高级拖拽

- 复习拖拽原理

  - 距离不变
  - 三个事件

- 限制范围

  - 对位置进行判断
    - 例子1：不能拖出窗口的 Div
    - 例子2：不能拖出指定窗口的 Div
  - 磁性吸附

- 图片拖拽

  - 阻止默认事件

- **文字选中**

  - 阻止默认事件 `return false` 可以解决 `chrome` 、`FireFox` 、`IE9`的文字选中问题
  - IE 下拖动有问题：
    - 事件捕获：`.setCapture()` 只兼容IE
    - 取消捕获：`.releaseCapture()` 

- 与 DOM 配合

  - 带框的拖拽
  - 保留原有位置的拖拽  

### 自定义滚动条

- 拖拽

  - 只有横向拖拽
  - 限制范围：范围的大小
  - 计算比例：当前值/最大值

- 控制其他对象

  - 例子1：控制物体的大小
  - 例子2：控制物体的透明度
  - 例子3：控制文字滚动

## Ajax 基础

### Ajax 是什么

- 什么是服务器
  - 网页浏览过程分析
  - 如何配置自己的服务器程序
- 什么是  **Ajax = Asynchronous JavaScript and XML**（异步的 JavaScript 和 XML）
  - 无刷新数据读取
  - 用户注册、在线聊天室
    - 异步、同步

### 使用 Ajax

- 基础：请求并显示静态 `txt `文件
  - 字符集编码：必须统一编码
  - 缓存、阻止缓存：
    - 根据 `URL` 缓存：让 `URL` 一直在变化，在 URL 后加时间戳
- 动态数据：请求 JS（或 json ）文件，获取过来是字符串，需要解析
  - `eval` 的使用：解析成 JS 元素
  - DOM 创建元素
- 局部刷新：请求并显示部分网页文件

### Ajax 原理

- HTTP 请求方法
  - `GET` ---- 用于获取数据（如：浏览帖子）
  - `POST`---- 用于上传数据（如：用户注册）
  - GET/POST 的区别
    - `GET` 是在 `url` 里传数据：安全性差、容量小、有缓存
    - `POST` 不通过 `url` ：安全性较高，容量大（2G）、无缓存

## Ajax 中级

### 编写 Ajax 

- 创建 Ajax 对象
    - `XMLHttpRequest()`
  - 笔记：变量是 `Window` 的属性

    - 使用未定义的变量 —— 报错
  - 使用未定义的属性 —— `undefined`

- 连接服务器

  - `open(方法，文件名，异步传输)`
    - *method*：请求的类型；`GET` 或 `POST` ，**必须大写**
    - *url*：文件在服务器上的位置，GET 请求要避免缓存，请向 URL 添加一个唯一的 ID
    - *async*：true（异步）或 false（同步）

- 发送请求

  - `send()`
    - *string*：仅用于 POST 请求

- 接收返回值

- 请求状态监控

  - `onreadystatechange` 事件
    - `readyState` 属性：请求状态
      
      - `0: 未初始化 `  还没有调用 `open()` 方法
      - `1: 开始载入  `  已调用 `send()` 方法，正在发送请求
      - `2: 载入完成 `  `send()` 发送完成，已收到全部响应内容
      - `3: 解析  `  正在解析响应内容
      - `4: 完成`  响应内容解析完成，可以在客户端调用了
      
    - `status` 属性( http 状态码)：请求结果，`200: 成功`
    
    - `responseText`  获得字符串形式的响应数据
    
      ```js
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      ```

> ## POST 请求
>
> 一个简单 POST 请求：
>
> 实例
>
> ```js
> xmlhttp.open("POST","/try/ajax/demo_post.php",true); xmlhttp.send();
> ```
>
> 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
>
> 实例
>
> ```js
> xmlhttp.open("POST","/try/ajax/demo_post2.php",true); xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); xmlhttp.send("fname=Henry&lname=Ford");
> ```
>
> | 方法                             | 描述                                                         |
> | :------------------------------- | :----------------------------------------------------------- |
> | setRequestHeader(*header,value*) | 向请求添加 HTTP 头。 *header*: 规定头的名称  *value*: 规定头的值 |  

### Ajax 数据

- 数据类型
  - 什么叫数据类型——英语/中文
  - `XML` / `JSON`
- 字符集( 文件编码 )
  - 所有文件字符集相同

## JS 面对对象基础

### 面对对象是什么

- 什么是对象
  - 什么是收音机，许多成分构成的整体，提供一些功能
  - 对象是一个整体，对外界提供一些操作
- 什么是面对对象
  - 使用对象时，只关注对象提供的功能，不关注其内部细节
  - 比如 JQuery
- 面向对象是一种通用思想，并非只有编程中能用，任何事情都可以面对对象

### JS 中的面对对象

- 面对对象编程（OOP）的特点
  - 抽象：抓住核心问题，把主要特征、相关特征抽出来
  - 封装：不考虑内部实现，只考虑功能使用
  - 继承：基于已有对象，继承出新的对象
    - 多态继承：同时具有几个父对象的特性
    - 多态：JAVA 等强类型语言常用，JS 不常用
- 对象的组成
  - 方法——函数：过程、动态的 
    - 函数：不属于对象
    - 方法：属于对象的函数
  - 属性——变量：状态、静态的
    - 变量：不属于对象
    - 属性：属于对象的变量

### 第一个面对对象的程序

- 为对象添加方法和属性
  - `this` 详解，事件处理中 `this` 的本质
    - `window`
    - `this` —— 函数属于谁
  - 不能在系统对象中随意附加方法、属性，否则会覆盖已有方法、属性
  - `Object` 对象：系统空白对象

### 工厂方式

- 工厂方式
  - 用构造函数创建一个类
  - 什么是类、对象（实例）：模具和零件
  - 笔记：构造函数/工厂函数
    - 构建对象的函数
    - `constructor` 属性 返回所有 `JavaScript` 变量的构造器函数。
- 工厂方式的问题
  - 没有 new
  - 函数重复定义：函数内容一样却不相等，浪费大量系统资源
- 问题解决：**构造函数加上** `new` , **然后用原型**`Prototype` 为对象添加**方法**
  - `new` 做了两件事
    - **替你创建了一个空白对象**：`var this = new Object()`
    - **替你返回了这个空白对象**：`return this `
  - `new` 和 `this`

### 原型：Prototype

- 原型是什么
  - 原型是 `class`，修改它可以影响一类元素
  - 在已有对象中加入自己的属性、方法
  
- 为所有 `Array` 添加 `Sum` 方法：`Array.prototype.sum = function () {} `
  - 给对象添加方法，类似于行间样式
  - **给原型添加方法，类似于 `class`**
  
- 原型的小缺陷
  
  - 无法限制覆盖
  
- 类和对象的区别
  - 类：生产对象的模板  `Array`
    -  `var arr = new Array()`
  - 对象：产品  `arr`
  
- 总结：**用构造函数加属性，用原型加方法，叫做混合方式构造对象**

## BOM 应用

### BOM 基础

- 打开、关闭窗口
  - `open(url, 打开方式)`：`open('ablout.blank', '_blank')`
    - 例子：页面内运行代码功能
  - `close(url, 打开方式)`：`window.close()` 关闭当前窗口
    - 例子：关闭时提示问题
      - 只能关闭自己 `open` 的窗口
- 常用属性
  - `window.navigator.userAgent`
    - `navigator`：包含大量信息
    - `userAgent`：浏览器信息
  - `window.location`
    - `href`：当前网页地址
    - `hostname`：主机域名
    - `pathname`：页面路径和文件名
    - `port`：端口
    - `protocol`：http协议
    - `assign`：加载新文档，url
  - `window.history`
    - `back()`：后退
    - `forward()`：前进
    - `go()`：历史中某个页面，-1 用于登陆后回跳

### 尺寸及坐标

- 窗口尺寸、工作区尺寸
  - 可视区尺寸
    - `document.documentElement.clientWidth`
    - `document.documentElement.clientHeight`
  - 滚动距离
    - `document.body.scrollTop`：旧版本 chrome 和没有 DOCTYPE 声明的 IE 
    - `document.documentElement.scrollTop`：IE FF
    - 完美的获取 `scrollTop` 赋值短语 ： 
      `var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;`

### 常用方法和事件

- 系统对话框

  - 警告框：`alert("内容")`，没有返回值
  - 选择框：`confirm("提问的内容")`，返回 `boolean`
  - 输入框：`prompt()`，返回字符串或 `null`

- `window` 对象常用事件

  - `onload`：页面加载完发生
  - `onscroll`：页面滚动时发生
  - `onresize`：事件会在窗口或框架被调整大小时发生
  - 例子：回到顶部按钮、侧边栏广告
    - 闪烁问题
      - `position:fixed;`

## COOKIE 基础与应用

###  什么是 cookie

- 页面用来保存信息
  - 比如：自动登录、记住用户名
- `cookie 的特征
  - 同一网站中所有页面共享一套 `cookie
  - 数量、大小有限
  - 过期时间
- JS 中使用 `cookie`
  - `document.cookie

### 使用 cookie 

- 设置 `cookie`

  - 格式：`名字 = 值`

  - 赋值时不会覆盖

  - 过期时间：`expires = 时间`

    - 设置前一个 cookie 数据的过期时间，expires 放在数据后面：
      - `document.cookie = 'password=123;expires='+ oDate;`
    - 日期对象的使用

##  JS 中的正则表达式

### 正则表达式基础

- 复习字符串操作：`var str = 'asdf1234';`
  - `search`：**查找位置** `str.search('3')`
  - `substring`：获取子字符串，
    - **截取某段**字符串, **不包含结束位**： `str.substring(2,5)`
    - 获取起点以后的字符串：`str.substring(2)`
  - `charAt`：**获取某个**字符串 `str.charAt(2)`
  - `split`：**分割**某个字符串 ` str.split('-')`
- 找出字符串中所有的数字
  - 用传统字符串操作完成
  - 用正则表达式完成
- 什么是正则表达式
  - 什么叫正则？
    - 规则、模式
  - 强大的**字符串匹配工具**
  - 是一种人类很难读懂的文字
  - `RegExp` 对象
    - `JS` 风格：`new RegExp( "a" , "i" )`
    - `perl` 风格：`/a/i`

### 字符串与正则配合

- `search`：字符串搜索，返回位置或 -1
  - 返回出现的位置
  - 忽略大小写：`i`：ignore
  - 判断浏览器类型
- `match`：获取匹配的项目，返回元素或
  - 量词：`+` （若干个）
  - 量词变化：`\d`(单个数字一组)   `\d\d`(两个数字一组)   和   `\d+`(若干连续数字)
  - 全局匹配：`g`：global
  - 例子：找出所有数字
- `replace(reg/str,replacement)`：替换所有匹配
  - 返回替换后的字符串
  - 例子：敏感词过滤

### 字符串

- 任意字符：`[]`方括号（元字符）
  - `[abc]`
    - 例子：`o[usb]t`：`obt`  `ost`  `out`
- 范围
  - `[a-z]`  `[0-9]`
    - 例子：`id[0-9]`：`id0`  `id5`
- 排除
  - `[^a]`
    - 例子：`o[^0-9]`：`oat ` `o?t`  `ot`
- 组合
  - `[a-z0-9A-Z]`
- 实例：偷小说
  - 过滤 HTML 标签，
    - 正则贪婪特性，从最长的内容开始过滤
    - 自定义 `innerText` 方法

- 转义字符
  - `.`(点) ：任意字符
  - `\d` (数字)：`[0-9]  `
  - `\w` (数字、英文、下划线)  ：`[a-z0-9_]`
  - `\s` (空白字符)：`[ ]`
  - `\D` (除了数字)：`[^0-9]`
  - `\W` (除了数字英文下划线) ：`[^a-z0-9_]`
  - `\S` (除了空白字符)：`[^ ]`
- 行首、行尾
  - `^` ：行首
  - `$`：行尾
- 逻辑
  - `|` : 将两个匹配条件进行逻辑“或”（or）运算

### 量词

- 什么是量词

  - `{n}`：刚好出现 n 次
  - `{n,m}` 至少出现 n 次，最多 m 次

- 常用量词

  - `{n,}` 至少 n 次，无上限

  - `*`  任意次 `{0,}`  可以为0次，不建议使用

  - `？` 零次或一次 `{0,1}`

    ```
    固定电话:010-23456789-1234 或 23456789
    (0\d{2,3}-)?[1-9]\d{7}(-\d{1,5})?
    ```

  - `+`  一次或任意次`{1,}`

  - `{n}`  正好 n 次

