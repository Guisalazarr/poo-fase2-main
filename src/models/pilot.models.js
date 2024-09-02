import { validate } from "bycontract";

// Classe Pilotos
export class Pilot {
    #registration;
    #name;
    #licenseActive;

    constructor(registration, name, licenseActive){
        validate(arguments, ['String', 'String', 'Boolean'])

        this.#registration = registration;
        this.#name = name;
        this.#licenseActive = licenseActive;
    }

    //Getters
    get registration(){return this.#registration};
    get name(){return this.#name};
    get licenseActive(){return this.#licenseActive};

    // Formata os dados para Json.
    toJson(){
      return {
       registration: this.#registration,
       name: this.#name,
       licenseActive: this.#licenseActive,
      }
    }
}


