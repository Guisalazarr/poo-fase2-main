import { validate } from "bycontract"
import { ar } from "date-fns/locale"

// Classe de Ocupação aerovias
export class AirwayOccupation {
    #occupieds

    constructor(){
        // Mapa para salvar as altitudes ocupadas.
        this.#occupieds = new Array()
    }

    // Metodo recebe o ID a data e horário escolhido e retorna um array com as altitudes.
    freeAltitude(idAirway, date, time){
    validate(arguments, ['string', 'string', 'Number'])

        const airway = this.#occupieds.find(item => {
         return item.idAirway === idAirway && item.date === date
        } )

        if(!airway){
            return this.generateAltitude().get(time).altitudes
        }

        const listAltitudes = this.generateAltitude().get(time)
        const result = listAltitudes.altitudes.filter(valeu => valeu !== airway.altitude)

        return result

    }

    // Metodo para registrar uma nova altitude e retorna boolean.
    occupy(idAirway, date, altitude, slot){
        validate(arguments, ['String', 'String', 'Number', 'Array'])

        this.#occupieds.push(     
            {idAirway: idAirway,
            date: date,
            altitude: altitude,
            slot:slot
            }   
        )

        return true
    }

    // Metodo que valida se a altitude informada está ocupada.
    isOccupied(idAirway, date, altitude, slot){
        validate(arguments, ['String', 'String', 'Number', 'Array'])

        const airway = this.#occupieds.find(item => {
          return item.idAirway === idAirway && item.date === date && item.altitude === altitude   
        })

        if(airway){        
             const result = airway.slot.filter(item => slot.includes(item))
            if(result.length){
                throw new Error('Altitude já ocupada neste slot de horário')
             }   
  
        }

        
    }

    // metodo para gerar um mapa com as altitudes.
    generateAltitude(){
        const listAltitudes = new Map()
        const altitudes =  [
            25000, 26000, 27000,
            28000, 29000, 30000,
            31000, 32000, 33000,
            34000, 35000
            ]
        for(let i = 0; i<24; i++){
            listAltitudes.set(i, {altitudes: altitudes})    
        }
        
        return listAltitudes
    }

}