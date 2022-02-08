enum EVENT_INNER {
    EVENT_NONE = 0,
    EVENT_END = 50000
}

interface TsEvent {
    Id: number
    CallBacks: Map<symbol, Function>
    OnceList: Map<symbol, boolean>
}

class EventManagerImplement {
    EventList: { [index: number]: TsEvent } = {}
    constructor() {
        this.EventList = {}
    }

    FindEvent(id: number) {
        if (id == undefined) { return }
        return this.EventList[id]
    }

    RegEvent(eventID: number, baseObj: any, callBack: Function): void
    RegEvent(eventID: number, baseObj: any, callBack: Function, once: boolean): void
    RegEvent(eventID: number, baseObj: any, callBack: Function, once?: boolean): void {
        if (once == undefined) { once = false }
        if ((eventID == undefined) || (baseObj == undefined) || (callBack == undefined)) {
            return
        }

        let symbKey = Symbol(baseObj)
        let event = this.FindEvent(eventID)
        if (event == undefined) {
            event = {
                Id: eventID,
                CallBacks: new Map<symbol, Function>(),
                OnceList: new Map<symbol, boolean>()
            }
            this.EventList[eventID] = event
        }
        event.CallBacks.set(symbKey, callBack)
        event.OnceList.set(symbKey, once)
    }

    UnRegEvent(eventID: number): void
    UnRegEvent(eventID: number, baseObj: any): void
    UnRegEvent(eventID: number, baseObj?: any): void {
        if ((eventID == undefined) || (baseObj == undefined)) {
            return
        }
        if(baseObj == undefined){
            if(this.EventList[eventID] != undefined){
                this.EventList[eventID] = undefined
            }
        }else{
            let event = this.FindEvent(eventID)
            
            if(event != undefined){
                //event.CallBacks[] = 
                //event
            }
        }
    }

    ClearEvent() {
        this.EventList = {}
    }
}

let EventManager = new EventManagerImplement()

export {
    EVENT_INNER,
    EventManagerImplement,
    EventManager
}