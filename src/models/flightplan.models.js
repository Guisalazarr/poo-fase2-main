import { validate } from "bycontract"
import timeToString from'../utils/timeToString.js'

//Classe do plano de voo
export class FlightPlan {
    #id
    #regPilot
    #idAirway
    #date
    #time
    #altitude
    #slot
    #cancelad

    constructor(id, regPilot, idAirway, date,time, altitude, slot, cancelad){
        validate(arguments, ['String', 'String', 'String', 'String' ,'Number', 'Number', 'Array', 'Boolean'])
 
        this.#id = id,
        this.#regPilot = regPilot,
        this.#idAirway = idAirway,
        this.#date = date,
        this.#time = time,
        this.#altitude = altitude,
        this.#slot = slot,
        this.#cancelad = cancelad
    }

    //Getters
    get id() {return this.#id}
    get regPilot() {return this.#regPilot}
    get idAirway() {return this.#idAirway}
    get date() {return this.#date}
    get time() {return this.#time}
    get altitudeid() {return this.#altitude}
    get slots() {return this.#slot}
    get cancelad() {return this.#cancelad}
    
    //Formata para Json
    toJson(){
        return{
            id: this.#id,
            regPilot: this.#regPilot,
            idAirway: this.#idAirway,
            date: this.#date,
            time: this.#time,
            altitude: this.#altitude,
            slot: timeToString(this.#slot),
            cancelad: this.#cancelad
        }
    }    
}