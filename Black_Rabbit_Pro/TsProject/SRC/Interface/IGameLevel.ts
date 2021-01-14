import { Transform } from "Utils/Common"

interface IGameLevel {
    name: string,
    root: Transform,
    OnStart(): void,
    OnUpdate(): void,
    OnDestroy(): void
}

export {
    IGameLevel
}

