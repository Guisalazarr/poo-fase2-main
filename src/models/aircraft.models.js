import { validate } from "bycontract"

// Classe Aeronave
export class Aircraft{
    #prefix
    #autonomy
    #cruisingSpeed

    constructor(prefix, cruisingSpeed, autonomy){
        validate(arguments, ['String', 'Number', 'Number'])
        this.#prefix = prefix
        this.#cruisingSpeed = cruisingSpeed
        this.#autonomy = autonomy
    }

    //Getters
    get prefix(){return this.#prefix}
    get cruisingSpeed(){return this.#cruisingSpeed}
    get autonomy(){return this.#autonomy}

    //formata para Json
    toJson(){
        return{
            prefix: this.#prefix,
            cruisingSpeed:this.#cruisingSpeed,
            autonomy: this.#autonomy,
        }
    }
}