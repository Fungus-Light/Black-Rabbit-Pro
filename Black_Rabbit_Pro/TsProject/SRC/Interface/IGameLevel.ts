import { Transform } from "Utils/Common"

/**
 * Basic Level Definition
 */
interface IGameLevel {
    /**
     * Level Name
     */
    name: string,
    /**
     * The Transform Where The Level At
     */
    root: Transform,
    //Init(): void,
    /**
     * Call On Level Start
     */
    OnStart(): void,
    /**
     * Call On Per Monobehaviour Update
     */
    OnUpdate(): void,
    OnFixedUpdate(): void,
    /**
     * Call On Level Destroy
     */
    OnDestroy(): void
}

export {
    IGameLevel
}

