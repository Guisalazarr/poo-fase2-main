import { Aircraft } from "../models/aircraft.models.js"
import { AircraftPrivate } from "../models/aircraftPrivate.models.js"
import { AircraftCommercial } from "../models/aircraftCommercial.models.js"
import { AircraftCargo } from "../models/aircraftCargo.models.js"
import { AircraftPassenger } from "../models/aircraftPassenger.models.js"
import generateId from "../utils/generateId.js"

// Base de dados para Aeronaves
 const aircrafts = new Array(
    new Aircraft('3333', 800, 20000,),
    new AircraftPrivate(generateId(), 700, 15000,'Latam'),
    new AircraftPassenger(generateId(), 600, 18000, 'Azul', 230),
    new AircraftCargo(generateId(), 1000, 500, 'gol', 3000)
)

export default aircrafts
