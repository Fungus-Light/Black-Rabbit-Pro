import { Fungus } from "csharp"
import { $, Debug, T } from "Utils/Common"

class FlowChart {
    flow: Fungus.Flowchart
    constructor(_flow: Fungus.Flowchart) {
        this.flow = _flow
    }

    ActBlock(block: string) {
        this.flow.ExecuteIfHasBlock(block)
    }

    StopBlock(block: string) {
        this.flow.StopBlock(block)
    }

    StopAllBlock() {
        this.flow.StopAllBlocks()
    }

}

function $FlowChart(name: string): FlowChart {
    let trans = $(name);
    if (trans != null) {
        let comp = trans.GetComponent(T(Fungus.Flowchart)) as Fungus.Flowchart
        if (comp != null) {
            return new FlowChart(comp)
        } else {
            Debug.LogError("No FlowChart In " + name)
        }
    } else {
        Debug.LogError("No Object Named " + name)
    }
}

export {
    FlowChart,
    $FlowChart
}