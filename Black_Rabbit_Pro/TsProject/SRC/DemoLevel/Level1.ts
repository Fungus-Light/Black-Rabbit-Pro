import { IGameLevel } from "Interface/IGameLevel";
import { Transform,$ } from "Utils/Common"

function Create() { return new Level1(); }
export { Create }

/*===============================================*/

class Level1 implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        
    }
    OnUpdate(): void {

    }
    OnDestroy(): void {

    }

}

