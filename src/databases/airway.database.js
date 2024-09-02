import { Airway } from "../models/airway.models.js"
import generateId from "../utils/generateId.js"

// Base de dados para aerovia
const airways = new Array(
    new Airway('2222', 'GRU', 'POA', 1000),
    new Airway(generateId(), 'POA', 'FLO', 700),
    new Airway(generateId(), 'GRU', 'POA', 1000),
    new Airway(generateId(), 'FLO', 'GRU', 300),
    new Airway(generateId(), 'GRU', 'POA', 1000)
)

export default airways