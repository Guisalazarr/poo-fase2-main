import { Airway } from "../../src/models/airway.models.js";
import { AirwayService } from "../../src/usecases/airwayService.usecase.js";


describe('Teste unitário da classe Airway Service', () =>{
    const airway = new Airway('any_id', 'any_origin', 'any_destination', 1)
    const sut = new AirwayService([airway])

    //--------------- Metodo recover -------------------------------
    it('Deveria retornar um Error se a aerovia não existir', ()=>{
        
       expect(() => sut.recover('wrong_origin', 'wrong_destination'))
       .toThrowError('Aerovia não foi localizada');
     })

    it('Deveria retornar um array com as aerovias encontradas', ()=>{

       const result = sut.recover('any_origin', 'any_destination')
       expect(result).toEqual([airway.toJson()]);
    })

    // -----------------Metodo getAirwayById-------------------------

    it('Deveria retornar um Error se a aerovia não existir', ()=>{
        
        expect(() => sut.getAirwayById('wrong_id'))
        .toThrowError('Aerovia não foi localizada');
      })

      it('Deveria retornar a aerovia encontrada', ()=>{
        
        const result = sut.getAirwayById('any_id')
        expect(result).toEqual(airway.toJson());
      })

})
