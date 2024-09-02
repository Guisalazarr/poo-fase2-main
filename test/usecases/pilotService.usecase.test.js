import { Pilot } from "../../src/models/pilot.models.js"
import { PilotService } from "../../src/usecases/pilotService.usecase.js"

describe('Teste unitário da classe Pilot Service', () =>{
    const pilot = new Pilot('any_id', 'any_name', false)
    const sut = new PilotService([pilot])

    it('Deveria retornar um Error se o pilot não existir', ()=>{
        
       expect(() => sut.recover('wrong_id')).toThrowError('Piloto não localizado');
     })

    it('Deveria retornar o pilot encontrado', ()=>{

       const result = sut.recover('any_id')
       expect(result).toEqual(pilot.toJson());
    })

})

;