import { validate } from "bycontract";
import {Aircraft} from "../models/aircraft.models.js"
import { AircraftPrivate } from "../models/aircraftPrivate.models.js";
import { AircraftCargo } from "../models/aircraftCargo.models.js";
import { AircraftPassenger } from "../models/aircraftPassenger.models.js";

// Clase de serviços Aeronave
export class AircraftService{
    #aircrafts

    //Recebe o array de aeronaves no construtor
    constructor(aircrafts){
        validate(aircrafts, [Aircraft])
        this.#aircrafts = aircrafts
    }

    //Metodo que busca a Aeronave por ID
    getAircraftById(prefix){
        validate(prefix, 'string')
        const result = this.#aircrafts.find(item => item.prefix === prefix)

        if(!result){
            throw new Error('Aeronave não localizada. \n')
        }

        return result.toJson()
    }


    valideteAircraftAltitude(aircraft, altitude, time){
        if(aircraft instanceof AircraftPrivate){
            if(altitude < 25000 || altitude > 27000){
                throw new Error('Altitude não permitida para esta aeronave')
            }
        }   

        if(aircraft instanceof AircraftPassenger){
            if(altitude < 28000){
                 throw new Error('Altitude não permitida para esta aeronave')
            }
        }

        if(aircraft instanceof AircraftCargo){
            if(time  > 6 ){
                throw Error('Horário não permitido para esta aeronave')
            }
        }
    }

    // Método para validar a autonomia da aeronave
    validateAutonomy(size, autonomy){
        const percent = autonomy * 0.10
        const validAutonomy = autonomy - percent
        
        if(size > validAutonomy){
           throw new Error ('Aeronave não possui autonomia para voar este trecho')
        }
    }

}
