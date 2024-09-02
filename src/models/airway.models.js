import { validate } from "bycontract"

//Classe de Aerovia
export class Airway {
    #id
    #origin
    #destination
    #size

    constructor(id, origin, destination, size){
        validate(arguments, ['String', 'String', 'String', 'Number'])
        this.#id = id
        this.#origin = origin
        this.#destination = destination,
        this.#size = size
    }

    //Getters
    get id() {return this.#id}
    get origin() {return this.#origin}
    get destination() {return this.#destination}
    get size() {return this.#size}

// formata para Json
    toJson(){
        return{
            id: this.#id,
            origin: this.#origin,
            destination: this.#destination,
            size: this.#size
        }
    }

}