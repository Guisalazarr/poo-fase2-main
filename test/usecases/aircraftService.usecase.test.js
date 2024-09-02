import { Aircraft } from '../../src/models/aircraft.models';
import { AircraftCargo } from '../../src/models/aircraftCargo.models';
import { AircraftPassenger } from '../../src/models/aircraftPassenger.models';
import { AircraftPrivate } from '../../src/models/aircraftPrivate.models';
import { AircraftService } from '../../src/usecases/aircraftService.usecase';

describe('Teste unitário da classe Aircraft Service', () =>{

    const aircraft = new Aircraft('any_prefix', 1, 1)
    const sut = new AircraftService([aircraft])

    // ----------- Metodo getAircraftById ----------------
    it('Deveria retornar um Error se a aeronave não existir', ()=>{
        
       expect(() => sut.getAircraftById('wrong_id'))
       .toThrowError('Aeronave não localizada.');
     }) 
    it('Deveria retornar a aeronave encontrada', ()=>{

       const result = sut.getAircraftById('any_prefix')
       expect(result).toEqual(aircraft.toJson());
    })

    // ----------- Metodo validateAutonomy ----------------

    it('Deveria retornar Error se a aeronave não possuir autonomia suficiente', ()=>{

        expect(() => sut.validateAutonomy(1, 1))
        .toThrowError('Aeronave não possui autonomia para voar este trecho');
     })
 
    // -------- Metodo valideteAircraftAltitude ------------
    
    it('Deveria retornar Error se a altitude não for permitida', ()=>{
        const privatAircraft = new AircraftPrivate('any_id', 1, 1,'any')

        expect(() => sut.valideteAircraftAltitude(privatAircraft, 1, 1))
        .toThrowError('Altitude não permitida para esta aeronave');
     })

     it('Deveria retornar Error se a altitude não for permitida', ()=>{
      const privatAircraft = new AircraftPrivate('any_id', 24000, 1,'any')

      expect(() => sut.valideteAircraftAltitude(privatAircraft, 28000, 1))
      .toThrowError('Altitude não permitida para esta aeronave');
   })
 

     it('Deveria retornar Error se a altitude não for permitida', ()=>{
        const passagerAircraft = new AircraftPassenger('any_id', 1, 1,'any',1)

        expect(() => sut.valideteAircraftAltitude(passagerAircraft, 1, 1))
        .toThrowError('Altitude não permitida para esta aeronave');
     })

     it('Deveria retornar Error se a altitude não for permitida', ()=>{
        const cargoAircraft = new AircraftCargo('any_id', 1, 1,'any',1)

        expect(() => sut.valideteAircraftAltitude(cargoAircraft, 1, 15))
        .toThrowError('Horário não permitido para esta aeronave');
     })
})

;