import { FileHelper, UnityEngine } from "csharp"

class GameConfig {
    v: number
    version: string
    resolution: {
        w: number,
        h: number
    }
    fullscreen: boolean
    entranceBundle: string
    mode: "debug" | "release"
    rate: 60
}

class GamePack {
    name: string
    levels: Array<string>
    entrance: string
}

const GameCoreObj = {
    GameEnv: "Core/GameEnv"
}

function ReadGameConfig(): GameConfig {
    let configStr = FileHelper.ReadStreamTextFile("GameConfig.json")
    console.log(configStr)
    return (JSON.parse(configStr) as GameConfig)
}

function ReadPackConfig(): Array<GamePack> {
    let PacksConfigText = FileHelper.ReadStreamTextFile("GamePacks.json")
    return (JSON.parse(PacksConfigText) as Array<GamePack>)
}

const SetResolution = UnityEngine.Screen.SetResolution

export {
    GameConfig,
    GamePack,
    GameCoreObj,
    ReadGameConfig,
    ReadPackConfig,
    SetResolution
}