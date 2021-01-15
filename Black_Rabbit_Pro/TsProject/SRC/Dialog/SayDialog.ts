import { Fungus } from "csharp"

/**
 * Class Of Dialog Panel
 */
class SayDialog extends Fungus.SayDialog { }

/**
 * Get Or Create Dialog
 */
const $SayDialog = SayDialog.GetSayDialog

export {
    SayDialog,
    $SayDialog
}