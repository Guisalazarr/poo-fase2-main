import { validate } from "bycontract";
import { Aircraft } from "./aircraft.models.js";

//Classe de aeronave privada
export class AircraftPrivate extends Aircraft {
    #respMaintenance

    constructor(prefix, cruisingSpeed, autonomy, respMaintenance){
        super(prefix, cruisingSpeed, autonomy)
        validate(respMaintenance, 'String')
        this.#respMaintenance = respMaintenance
    }

    //Getter
    get respMaintenance() {return this.#respMaintenance}
    
    //Formata para Json
    toJson(){
        return {
            ...super.toJson(),
            respMaintenance: this.#respMaintenance
        }
    }
    

}