import { UnityEngine, System } from "csharp"

declare global {
    /**
     * UnityEngine.Vector3的重命名
     */
    class Vector3 extends UnityEngine.Vector3 { }
    /**
     * UnityEngine.Vector2的重命名
     */
    class Vector2 extends UnityEngine.Vector2 { }
    /**
     * 读取一个data文件夹下的文本文件并返回其内容
     * 
     * @param path 文件名
     */
    function ReadTextFile(path: string): string
    /**
     * 获得一个对象的类型
     * @param x C#的类型
     */
    function T(x: new (...args: any[]) => any): System.Type
    /**
     * Debug类
     */
    class Debug {
        /**
         * 在控制台打印一条记录
         * @param message 
         */
        public static Log(message): void;

        /**
         * 在控制台打印一条警告
         * @param message 
         */
        public static Warning(message): void;

        /**
         * 在控制台打印一条错误
         * @param message 
         */
        public static Error(message): void
    }
    /**
     * 获取对象的Transform组件
     * @param name 对象的名字，需要去掉前面的 $ 符号
     */
    function $(name: string): UnityEngine.Transform
}