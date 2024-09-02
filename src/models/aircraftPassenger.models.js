import { validate } from "bycontract";
import { AircraftCommercial } from "./aircraftCommercial.models.js";

//Clase de Aeronava Passageiros
export class AircraftPassenger extends AircraftCommercial{
   #maxPassenger

    constructor(prefix, cruisingSpeed, autonomy, nameCia, maxPassenger){
    super(prefix, cruisingSpeed, autonomy, nameCia)
    validate(maxPassenger, 'Number')
    this.#maxPassenger = maxPassenger 
}   
    //Getter
    get maxPassenger() {return this.#maxPassenger}

    //Formata para Json
    toJson(){
        return{
            ...super.toJson(),
            maxPassenger: this.#maxPassenger
        }
    }
}