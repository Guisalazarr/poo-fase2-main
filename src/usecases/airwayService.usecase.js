import { validate } from "bycontract"
import {Airway} from "../models/airway.models.js"

//Classe de servços para Aerovias
export class AirwayService {
    #airways
    
    //Recebe o array de aerovias no construtor
    constructor(airways){
        validate(airways, [Airway])
        this.#airways = airways
    }

    // Metodo para buscar a aerovia pelo ID
    getAirwayById(id){
        validate(id, 'String')
        
        const result = this.#airways.find(airway => airway.id === id)

        if(!result){
            throw new Error('Aerovia não foi localizada.\n')
        }

        return result.toJson()
    }

    //Filtra as aerovias pelo origin e destino e retorna um array de aerovias.
    recover(origin, destination){
        validate(arguments, ['String', 'String'])
       const result = this.#airways.filter((airway) => {
        return airway.origin === origin && airway.destination === destination
        } )

        if(!result.length) {
            throw new Error('Aerovia não foi localizada.\n')
         }

        return result.map((airway)=> airway.toJson())
    }

}