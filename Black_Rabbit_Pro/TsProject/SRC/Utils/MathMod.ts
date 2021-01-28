const ABS = Math.abs
const MIN = Math.min
const MAX = Math.max
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