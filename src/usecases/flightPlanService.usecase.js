import { validate } from "bycontract"
import { FlightPlan } from "../models/flightplan.models.js"

// Classe de serviços do plano de voo
export class FlightPlanService {
    #flightPlans = []

    constructor(){
        this.#flightPlans
    }

    // Metodo para consistir o plano de voo
    consists(flightplan){
        validate(flightplan, FlightPlan)
        this.#flightPlans.push(flightplan)
    }

    // Metodo Recebe o Id e retorno o piloto
    recover(id){
        validate(id, 'String')
        const findFlingthPlan = this.#flightPlans.find((flightPlan) => flightPlan.id === id)

        if(!findFlingthPlan){
            throw new Error ('Plano de voo não localizado\n')
        }

        return findFlingthPlan.toJson()
    }
}