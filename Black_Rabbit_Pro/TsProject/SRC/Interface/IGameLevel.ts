import { JsBehaviour } from "csharp"

interface IGameLevel {
    name: string,
    bindTo: JsBehaviour,
    OnStart(): void,
    OnUpdate(): void,
    OnDestroy(): void
}

export {
    IGameLevel
}