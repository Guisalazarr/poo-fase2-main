import { validate } from "bycontract";
import {Pilot} from "../models/pilot.models.js"

// Classe de serviços pilotos
export class PilotService{
    #pilots

    //Recebe o array de pilotos no contrutor
    constructor(pilots){
        validate(pilots, [Pilot])
        this.#pilots = pilots
    }

    //Recebe a matricula e retorna o piloto.
    recover(registration){
        validate(registration, 'String')
        const result = this.#pilots.find((pilot) => pilot.registration === registration)

        if(!result) {
            throw new Error('Piloto não localizado\n')
        }
        
        return result.toJson()
        
    }



}
