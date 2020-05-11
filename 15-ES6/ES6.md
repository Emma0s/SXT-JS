## 认识ES6
### 什么是ES6
- ECMAScript是JavaScript的标准，JS是ES的实现；主流实现只有JS，所以很多时候JS等同于ECMA
### 为什么用ES6
- 语言在更新换代：JDK8，PHP7，Pyth3.7
- 支持更多语法，使用更方便
- 增强工程性
---------------------------------------------------
## ES6语法特性
### 变量
    var:重复声明，不能限制修改，函数级作用域
    let:不能重复声明，变量,块级作用域
    const:不能重复声明,常量，块级作用域
### 解构赋值
   1. 两边结构必须一样
`let {a,b}=[1,2]  错误`

2. 右边必须是个东西
    `let {a,b}={1,2} 错误`

3. 赋值与解构同时完成
```
let {a,b};
{a,b}={a:1,b:2}      错误
let {a,b}={a:1,b:2}  正确
```
### 箭头函数
   1. 如果有且仅有一个参数，（）可不写
   2. 如果有且仅有一个语句并且语句是return，{}也可以不写
   
    function(){   //1
        .....
    }
    ()=>{}        //2=1

### 修正this
- this对象的指向时可变的，但在箭头函数中，是固定的。即：普通function，谁调用this就指谁，可变；用了箭头函数，谁声明this就指谁，不可变。

### 参数展开
```
function show(a,b,...c){   //...：收集、展开
    console.log(a,b,c);
}
show(12,5,4,8,16)   //a=12,b=5,c=[4,8,16]
show(12,5)          //a=12,b=5,c=[]
show(12)            //a=12,b=undefined,c=[]
function show(a,b,...c,d){}   //报错

let arr1 = [21,5,8];
let arr2 = [4,5,6];
let arr = [...arr1,...arr2];    //arr=[21,5,8,4,5,6]

let json = {a:12,b:5,c:99};
let json2 = {    //a:12,b:5,c:99,d:999
    ...json,
    d: 999
};

```
### Array扩展：
- map   映射，一一对应（n=>n）
- reduce    n=>1
- filter    过滤（n=>?）
- forEach   遍历
```
let arr = [68,53,12,98,65];
let arr1 = arr.map(item=>item>=60?'及格':'不及格');
let result = arr.reduce(function(tmp,item,index){
    if(index==arr.length-1){
        return (tmp+item)/arr.length;
    }else{
        return tmp+item;
    }
});
let arr2 = arr.filter(item=>item%2==0);
arr.forEach((item,index)=>{
    alert('第'+index+'个:'+item);   //字符串连接
    alert(`第${index}个：${item}`); //模板字符串
});
```
### JSON：
- stringify：序列化，JSON->字符串
- parse：反序列化，字符串->JSON
```
var obj = { name: "Bill", age: 62, city: "Seatle" };     //等于JSON.parse(myJSON)
var myJSON = JSON.stringify(obj);      //{"name":"Bill","age":62,"city":"Seatle"}

```
------------------------------------
### babel编译
在线：
- 步骤：
    1. 引入browser
    2. type="text/babel"
- 缺点：在客户端运行，有延迟

本地：
1. 安装node
2. 安装babel
   ```
   npm i @babel/core @babel/cli @babel/preset-env
   npm i @babel/polyfill
   ```
3. 添加脚本
    ```
    "build"："babel src -d dest"
    ```
4. 添加配置
    ```
    {
        "presets":{
            "@babel/preset-env"
        }
    }
    ```
5. 执行
    ```
    npm run build
    ```
------------------
### 异步操作
- 异步操作：同时进行多个操作，用户体验，代码混乱
- 同步操作：一次只能进行一个操作，用户体验不好，代码清晰
- 异步的操作，同步的写法：
    #### Promise
        1、封装
        2、promise.all{[   //所有的promise都执行成功则成功，且返回一个promise数组
                p1,
                p2,
                ...
            ]}.then
        3、promise.race    //返回最先成功的promise

    async/await
        普通函数——一直执行，直到结束
        async函数——能够"暂停"
---------------
### 面向对象
    
#### 语言发展：
机器语言->汇编语言->低级语言（面向过程）->高级语言（面向对象）->模块系统->框架->系统接口（API）

#### 封装
- ES5面向对象（假的）
    没有统一的写法
- ES6面向对象（假的）
        统一的写法
#### 继承：
1. 省事
2. 便于扩展

#### ES6新加：
    class           类声明
    constructor     构造函数
    extends         继承
    super           父类/超类
----------------------------------------
### 模块系统
1. 定义
2. 使用
   1. 导出（export）
   ```
        //变量
        export let a=1;
        //函数
        export function show(){
            ......
        }
        //类
        export class Person{
            .......
        }
        //默认成员
        export default
   ```
   2. 导入(import)
   ```
        import * as model from xxx          引入所有成员
        import model from xxx               引入default成员
        import {a,b as name} from xxx
        //只引入，不使用
        import 'xxx'
        //异步引入
        let p=import(xxxx)
   ```
   3. webpack编译



