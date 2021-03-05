# 游戏结构

在开始制作关卡之前，我们需要了解游戏的基本结构。

## 入口

为了便于拓展，**Black-Rabbit-Pro** 采用了，统一入口 + 配置文件 + 游戏包 的结构。
入口场景位于，**Assets/BlackRabbitPro/Scenes/Entrance.unity**

![](GameStruct/entrance.png)

**LevelRunner** 物体运行了一个 **GameEntrance** 的模块，这个模块的源代码可以在

**TsProject/JS/GameEntrance.ts** 找到

这个模块会自动添加所有关卡必要的环境，并且加载配置文件中指定的游戏包，从游戏包里读取入口场景。

## 游戏包



## 配置游戏设置



## 配置关卡信息