import { calculeSlotTime } from '../utils/calculateSlotTime.js'
import { FlightPlan } from '../models/flightplan.models.js'
import generateId from '../utils/generateId.js'

// Classe do sistema
export class SystemController {
    #flightPlanService
    #airwayService
    #pilotService
    #airWayOccupation
    #aircraftService

    //Recebe as classes de serviços pelo constructor
    constructor(flightPlanService, airwayService, pilotService, airWayOccupation, aircraftService){
        this.#flightPlanService = flightPlanService
        this.#airwayService = airwayService
        this.#pilotService = pilotService
        this.#airWayOccupation = airWayOccupation
        this.#aircraftService = aircraftService
    }

    //Metodo para listar as aerovias
    listAirway(origin, destination){  
        try{
        // Busca a aerovia através da origem e do destino
        const result = this.#airwayService.recover(origin, destination)      
        console.log('Aerovias: ', result)
            
        }
        catch(error){
            console.log(error.message)
        }
    }

    // Listar altitudes livres
    listFreeAltitude(id, date, time){
        try{
            // Busca a aerovia pelo ID
            const airway = this.#airwayService.getAirwayById(id)
            const result = this.#airWayOccupation.freeAltitude(airway.id, date, time)
            
            if(!result){
                throw new Error('Altitude não dispoivel para este horário\n')
            }
        
            console.log('Altitudes:', result)

        }catch(error){
            console.log(error.message)
        }
    }

    // Metodo para aprovar o plano de voo
    aprooveFlightPlan(registration, idAirway, prefixAircraft, date, time, altitude){
        try{   
            const pilot = this.#pilotService.recover(registration)

            if(!pilot.licenseActive){
                throw new Error('Licença do piloto não está ativa \n')
            }
    
            const airway = this.#airwayService.getAirwayById(idAirway)
            const aircraft = this.#aircraftService.getAircraftById(prefixAircraft)
    
            //gera o slot de horários necessários.
            const slot = calculeSlotTime(airway.size, aircraft.cruisingSpeed, time)

            // verifica se a altitude é compativel com a aeronave e se possui restrição de horário. 
            this.#aircraftService.valideteAircraftAltitude(airway, altitude, time)

            // verifica se a aeronave possui autonomia.
            this.#aircraftService.validateAutonomy(airway.size, aircraft.autonomy)

            // Metodo que valida se a altitude informada está ocupada.
            this.#airWayOccupation.isOccupied(airway.id, date, altitude, slot)

            // Metodo para registrar uma nova altitude e retorna boolean.
            const occupy = this.#airWayOccupation.occupy(airway.id, date, altitude, slot)

            if(!occupy){
                throw new Error ('Erro salvar slot de horários')
            }
            //instancia um novo plano de voo
            const flightplan = new FlightPlan(generateId(), pilot.registration, airway.id, date, time, altitude, slot, false)
            
            //consiste o plano de voo
            this.#flightPlanService.consists(flightplan)

            return console.log(`Plano de voo com o ID ${flightplan.id} foi aprovado! \n`)


        }catch(error){
            console.log(error.message)
        }
    }
    
    // Metodo para listar o plano de voo
    listFlightPlan(id){
        try{      
            const result = this.#flightPlanService.recover(id)
            console.log('Plano de voo:', result)

        }catch(error){  
              console.log(error.message)
        }
    }

}