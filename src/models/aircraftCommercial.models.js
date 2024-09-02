import { Aircraft } from "./aircraft.models.js";
import { validate } from "bycontract";

//Clase de Aeronave comercial
export class AircraftCommercial extends Aircraft{
   #nameCia

    constructor(prefix, cruisingSpeed, autonomy, nameCia){
    super(prefix, cruisingSpeed, autonomy)
    validate(nameCia, 'String')
    this.#nameCia = nameCia 
}
    //Getter
    get nameCia() {return this.#nameCia}

    //Formata para Json
    toJson(){
        return{
            ...super.toJson(),
            name: this.#nameCia
        }
    }
}