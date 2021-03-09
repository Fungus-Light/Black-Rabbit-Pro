import * as Reconciler from "react-reconciler"
import * as React from "react"
import { UnityEngine } from "csharp"
import * as puerts from "puerts"
import * as csharp from "csharp"

function deepEquals(x: any, y: any): boolean {
    if (x === y) return true;
    const xEqual = x.Equals;
    const yEqual = y.Equals;
    if (xEqual || yEqual) {
        return x.Equals(y);
    }
    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    for (var p in x) { // all x[p] in y
        if (p === 'children') continue;
        if (!deepEquals(x[p], y[p])) return false;
    }

    for (var p in y) {
        if (p === 'children') continue;
        if (!x.hasOwnProperty(p)) return false;
    }

    return true;
}

class UnityWidget {

    type: string;
    callbackRemovers: { [key: string]: () => void };
    nativePtr: UnityEngine.GameObject;
    slot: any;
    //nativeSlotPtr: UE.PanelSlot;
    myPropsWillChange: { [key: string]: () => void };
    callBackWillAdd: { [key: string]: () => void };
    compPtr: UnityEngine.EventSystems.UIBehaviour ;

    constructor(type: string, props: any) {
        this.type = type;
        this.callbackRemovers = {};

        try {
            this.init(type, props);
        } catch (e) {
            console.error("create " + type + " throw " + e);
        }
    }

    init(type: string, props: any) {
        console.log('init ' + type)
        if (type === 'GameObject') {
            this.nativePtr = new UnityEngine.GameObject();
        } else {
            this.myPropsWillChange = {};
            this.callBackWillAdd = {};
            for (const key in props) {
                let val = props[key];
                if (typeof val === 'function') {
                    this.callBackWillAdd[key] = val;
                } else if (key !== 'children') {
                    this.myPropsWillChange[key] = val;
                }
            }
        }
    }

    mergeComp() {
        if (this.compPtr) {
            for (let i in this.myPropsWillChange) {
                if (this.compPtr[i] !== undefined) {
                    this.compPtr[i] = this.myPropsWillChange[i];
                }
            }
            for (let i in this.callBackWillAdd) {
                this.unbind(i);
                this.bind(i, this.callBackWillAdd[i])
                this.callbackRemovers[i] = this.callBackWillAdd[i];
            }
        }
    }

    getComp(gameObject: UnityEngine.GameObject) {
        if (!this.nativePtr) {
            console.log(this.type)
            this.nativePtr = gameObject;
            let cType = csharp;
            for (let i of this.type.split('.')) {
                cType = cType[i];
            }
            this.compPtr = gameObject.AddComponent(puerts.$typeof(cType));
        }
    }

    bind(name: string, callback: () => void) {
        if (this.compPtr[name] !== undefined) {
            this.callbackRemovers[name] = callback;
            this.compPtr[name].AddListener(callback)
        }

    }

    update(oldProps: any, newProps: any) {
        this.myPropsWillChange = {};
        this.callBackWillAdd = {};

        let propChange = false;
        for (var key in newProps) {
            let oldProp = oldProps[key];
            let newProp = newProps[key];
            if (key !== 'children' && oldProp !== newProp) {
                if (typeof newProp === 'function') {
                    this.callBackWillAdd[key] = newProp;
                } else {
                    this.myPropsWillChange[key] = newProp;
                    propChange = true;
                }
            }
        }
        this.mergeComp();
    }

    unbind(name: string) {
        if (this.compPtr && this.compPtr[name] !== undefined) {
            let remover = this.callbackRemovers[name];
            this.callbackRemovers[name] = undefined;
            if (remover) {
                this.compPtr[name].RemoveListener(remover);
            }
        }
    }

    unbindAll() {
        if (this.compPtr) {
            for (var key in this.callbackRemovers) {
                if (this.compPtr[key] !== undefined) {
                    this.compPtr[key].RemoveAllListeners(remover);
                }
            }
            this.callbackRemovers = {};
        }
    }

    appendChild(child: UnityWidget) {
        console.log("add", child.type)
        if (!child.nativePtr) {
            child.getComp(this.nativePtr);
            child.mergeComp();
        } else {
            child.nativePtr.transform.SetParent(this.nativePtr.transform)
        }
    }

    removeChild(child: UnityWidget) {
        child.unbindAll();
        if (child.compPtr) {
            UnityEngine.Object.Destroy(child.compPtr);
        } else {
            child.nativePtr.transform.SetParent(null)
            UnityEngine.Object.Destroy(child.nativePtr);
        }
    }

}

class UnityWidgetRoot {

}

const hostConfig: Reconciler.HostConfig<string, any, UnityWidgetRoot, UnityWidget, UnityWidget, any, any, {}, any, any, any, any, any> = {
    getRootHostContext() {
        return {};
    },

    getChildHostContext(parentHostContext: {}) {
        return parentHostContext;//no use, share one
    },

    appendInitialChild(parentInstance: UnityWidget, child: UnityWidget) {
        parentInstance
    },

}

export const reconciler = Reconciler(hostConfig)
let root = new UnityWidgetRoot(csharp.Script.o);
export const container = reconciler.createContainer(root, false, false);