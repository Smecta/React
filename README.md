# React
Hello React！ 学习笔记

# 安装React

1. 默认安装 nodejs 和 npm 
   
2. 安装React脚手架
    ``` bash
    npm install -g create-react-app 
    ```
3. 创建第一个React项目
    ``` bash
    create-react-app demo01
    ```
4. 运行第一个React项目
    ``` bash
    cd demo01 // 进入文件夹
    npm start & yarn start // 预览项目
    ```
# 学习React JSX语法
> JSX 就是javascript和XML结合的一种格式。React创造了JSX，可以方便利用HTML语法来创建虚拟DOM，当遇到 `<` ,JSX就当作HTML解析，遇到 `{` 就当JavaScript解析。
1. 组件和普通JSX语法区别
   自定义组件需要首字母大写，而JSX是小写字母开头。
2. JSX中使用三元运算符
# 学习React 组件写法
1. 新建组件 首字母大写
2. 组件外层包裹 外层应有`<div>`进行包裹
3. 使用Fragment标签代替外层包裹来避免外层不能有包裹元素存在

# 