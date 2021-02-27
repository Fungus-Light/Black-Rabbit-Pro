import { UnityEngine } from "csharp"
import { $typeof } from "puerts"
import { $, Debug, T } from "./Common"

function $Component<Type extends UnityEngine.Component>(name: string): Type {
    let trans = $(name)
    if (trans == null) {
        Debug.LogError("Can not find " + name)
        return null
    } else {
        
        let component = trans.GetComponent($typeof(t)) as Type
        if (component != null) {
            return component
        } else {
            Debug.LogError("Can not find such component in " + name)
            return null
        }
    }
}

class AudioSource extends UnityEngine.AudioSource { }
function $AudioSource(name: string): AudioSource {
    if ($(name) != null) {
        return $(name).GetComponent(T(AudioSource)) as AudioSource;
    } else {
        return null;
    }
}



export {
    $Component,
    AudioSource,
    $AudioSource,

}