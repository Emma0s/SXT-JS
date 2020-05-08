### 认识ES6
#### 什么是ES6
- ECMAScript是JavaScript的标准，JS是ES的实现；主流实现只有JS，所以很多时候JS等同于ECMA
#### 为什么用ES6
- 语言在更新换代：JDK8，PHP7，Pyth3.7
- 支持更多语法，使用更方便
- 增强工程性
### ES6语法特性
#### 变量
    var:重复声明，不能限制修改，函数级作用域
    let:不能重复声明，变量,块级作用域
    const:不能重复声明,常量，块级作用域
#### 解构赋值
1、两边结构必须一样
`let {a,b}=[1,2]  错误`

2、右边必须是个东西
    `let {a,b}={1,2} 错误`

3、赋值与解构同时完成
```
let {a,b};
{a,b}={a:1,b:2}      错误
let {a,b}={a:1,b:2}  正确
```
#### 箭头函数
    function(){   //1
        .....
    }
    ()=>{}        //2=1

简写：

   1、如果有且仅有一个参数，（）可不写
   
   2、如果有且仅有一个语句并且语句是return，{}也可以不写

#### 修正this
this对象的指向时可变的，但在箭头函数中，是固定的。即：普通function，谁调用this就指谁，可变；用了箭头函数，谁声明this就指谁，不可变。

#### 参数展开
...：收集、展开
```
function show(a,b,...c){
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
#### Array扩展：
map         映射，一一对应（n=>n）

reduce      n=>1

filter      过滤（n=>?）

forEach     遍历
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
#### JSON：
stringify：序列化，JSON->字符串

parse：反序列化，字符串->JSON
```
var obj = { name: "Bill", age: 62, city: "Seatle" };     //等于JSON.parse(myJSON)
var myJSON = JSON.stringify(obj);      //{"name":"Bill","age":62,"city":"Seatle"}

```



