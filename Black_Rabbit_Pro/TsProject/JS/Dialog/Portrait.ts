import { Fungus, DialogHelper } from "csharp"

class Stage extends Fungus.Stage { }
class PortraitOptions extends Fungus.PortraitOptions { }

const $Stage = DialogHelper.GetStage

export {
    Stage,
    PortraitOptions,
    $Stage
}