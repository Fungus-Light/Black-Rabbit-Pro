import { UnityEngine } from "csharp"
import { $typeof } from "puerts"
import { $, Debug, T } from "./Common"


class AudioSource extends UnityEngine.AudioSource { }
function $AudioSource(name: string): AudioSource {
    if ($(name) != null) {
        return $(name).GetComponent(T(AudioSource)) as AudioSource;
    } else {
        return null;
    }
}

class ParticleSystem extends UnityEngine.ParticleSystem { }
function $Particle(name:string):ParticleSystem{
    if ($(name) != null) {
        return $(name).GetComponent(T(ParticleSystem)) as ParticleSystem;
    } else {
        return null;
    }
}

export {
    AudioSource,
    $AudioSource,
    ParticleSystem,
    $Particle,
}