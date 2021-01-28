import { Fungus } from "csharp"

/**
 * Class Of Dialog Panel
 */
class SayDialog extends Fungus.SayDialog { }
class Character extends Fungus.Character { }
/**
 * Get Or Create Dialog
 */
const $SayDialog = SayDialog.GetSayDialog

export {
    SayDialog,
    Character,
    $SayDialog
}