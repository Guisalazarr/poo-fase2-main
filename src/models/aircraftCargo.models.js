import { validate } from "bycontract";
import { AircraftCommercial } from "./aircraftCommercial.models.js";

//Classe de aeronave de carga
export class AircraftCargo extends AircraftCommercial{
   #weightMax

    constructor(prefix, cruisingSpeed, autonomy, nameCia, weightMax){
    super(prefix, cruisingSpeed, autonomy, nameCia)
    validate(weightMax, 'Number')
    this.#weightMax = weightMax 
}   
    //Getter
    get weightMax() {return this.#weightMax}

    toJson(){
        return{
            ...super.toJson(),
            weightMax: this.#weightMax
        }
    }

}