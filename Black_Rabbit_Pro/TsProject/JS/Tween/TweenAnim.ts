import { System } from "csharp"
import { ScaleFromTo } from "Tween/Tween"
import { $ } from "Utils/Common"

function JumpOutActive(name: string, overscale: number, timescale: number, callback: System.Action): void {

    let trans = $(name)
    trans.gameObject.SetActive(true)
    let OriScale = trans.localScale

    ScaleFromTo(name, 0.01, overscale, 0.15 * timescale, () => {
        ScaleFromTo(name, 1, 1 / overscale, 0.1 * timescale, () => {
            trans.localScale = OriScale;
            if (callback != null) {
                callback();
            }
        })
    })
}

function JumpOverScale(name: string, overscale: number, timescale: number, callback: System.Action): void {
    let trans = $(name)
    let OriScale = trans.localScale;

    ScaleFromTo(name, 1, overscale, 0.15 * timescale, () => {
        ScaleFromTo(name, 1, 1 / overscale, 0.15 * timescale, () => {
            trans.localScale = OriScale;
            if (callback != null) {
                callback();
            }
        })
    })

}

export {
    JumpOutActive,
    JumpOverScale,

}