import { JsBehaviour, UnityEngine } from "csharp"

interface IGameLevel {
    name: string,
    root: UnityEngine.Transform,
    OnStart(): void,
    OnUpdate(): void,
    OnDestroy(): void
}

export {
    IGameLevel
}

