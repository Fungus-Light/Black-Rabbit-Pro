# Aya（文） 脚本语言

> **Aya**是为**Black-Rabbit**框架搭配的一种脚本语言，主要用于对话、交互，可以很好的和JavaScript兼容。
>
> 适合新手或者对编程不熟悉的人使用。

---

### 前置概念

**Aya**是一种脚本语言，使用UTF-8格式的字符集。

**Aya**使用英文保留字，但是支持其他UTF-8的字符作为标识符。

**Aya**需要通过编译器编译为Javascript执行



一个以**.aya**结尾的文本文件是一个**Aya**脚本文件

### 基本语法

- 注释

注释内语句不会被执行

三种注释风格都是支持的

```
# 注释

//注释

/*
注释
*/
```

- 变量

```shell
name = "Jack"

number = 1

state = false
```

需要使用到变量的时候，直接定义即可

- block语句块

代表一段语句，可以用 **to**语句跳转

```shell
block1{
	# 语句
}
```

- 选择

```shell
if (state){
	true to block1
	false to block2
}	
```

- 分支

```shell
# state为数字

switch(state){
	1 to block1
	2 to block2
}
```

- 循环

```

```

