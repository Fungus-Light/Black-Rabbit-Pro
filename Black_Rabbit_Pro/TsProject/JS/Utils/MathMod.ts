/**
 * Abselute 
 * 绝对值
 */
const ABS = Math.abs
const MIN = Math.min
const MAX = Math.max
/**
 * Random Object
 * 随机数对象
 */
const RANDOM = {
    GetRndInteger: function (min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export {
    ABS,
    MIN,
    MAX,
    RANDOM
}