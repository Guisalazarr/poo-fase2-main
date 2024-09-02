import airways from "../databases/airway.database.js"
import pilots from "../databases/pilots.database.js"
import aircrafts from "../databases/aircraft.database.js";
import { AirwayService } from "../usecases/airwayService.usecase.js";
import { FlightPlanService } from "../usecases/flightPlanService.usecase.js";
import { PilotService } from "../usecases/pilotService.usecase.js";
import { AirwayOccupation } from "../usecases/airwayOcupation.js";
import { SystemController } from "../controllers/system.controller.js";
import {AircraftService} from '../usecases/aircraftService.usecase.js'

// classe para instanciar a classe do sistema e suas depencias em somente em um local.
export class SystemFactory{

      systemController(){
        return new SystemController(
            new FlightPlanService(),
            new AirwayService(airways),
            new PilotService(pilots),
            new AirwayOccupation(),
            new AircraftService(aircrafts)
        )
    }
}