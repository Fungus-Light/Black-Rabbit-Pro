import { DialogHelper, Fungus } from "csharp"

/**
 * Class Of Dialog Panel
 */
class SayDialog extends Fungus.SayDialog { }
class Character extends Fungus.Character { }
/**
 * Get Or Create Dialog
 */
const $SayDialog = SayDialog.GetSayDialog
const $Character = DialogHelper.GetCharacter

export {
    SayDialog,
    Character,
    $SayDialog,
    $Character
}