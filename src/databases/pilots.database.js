import { Pilot } from "../models/pilot.models.js"
import generateId from "../utils/generateId.js"

// Base de dados para pilotos
 const pilots= [ new Pilot('1111', 'Pedro', true),
    new Pilot(generateId(), 'João', true),
    new Pilot(generateId(), 'Carlos', false) ]
 


export default pilots
