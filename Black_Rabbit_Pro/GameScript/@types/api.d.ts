
declare module "JS/GameEntrance" {
    /**
     * This is where the game begin
     */

}

declare module "JS/LevelLoader" {
    import { LevelRunner } from "csharp";
    import { IGameLevel } from "JS/Interface/IGameLevel";
    function Init(bindTo: LevelRunner): void;
    function SetLevel(name: string, Level: IGameLevel): void;

}

declare module "JS/Interface/IGameLevel" {
    import { Transform } from "JS/Utils/Common";
    interface IGameLevel {
        name: string;
        root: Transform;
        OnStart(): void;
        OnUpdate(): void;
        OnDestroy(): void;
    }

}

declare module "JS/Utils/Common" {
    import { UnityEngine, GameObjectHelper } from "csharp";
    import { $typeof } from "puerts";
    /**
     * Debug Class, Rename Of UnityEngine.Debug
     */
    class Debug extends UnityEngine.Debug {
    }
    /**
     * UnityEngine's Vector3
     */
    class Vector3 extends UnityEngine.Vector3 {
    }
    class Vector2 extends UnityEngine.Vector2 {
    }
    class Transform extends UnityEngine.Transform {
    }
    class GameTime extends UnityEngine.Time {
    }
    const T: typeof $typeof;
    const $: typeof GameObjectHelper.GetTransformByName;

}
