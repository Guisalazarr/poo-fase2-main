import { FlightPlanService } from "../../src/usecases/flightPlanService.usecase.js";
import { FlightPlan } from "../../src/models/flightplan.models.js";


describe('Teste unitário da classe FlightPlan Service', () =>{
    const sut = new FlightPlanService()
    const flightPlan = new FlightPlan('any_id', 'any_id', 'any_id', '14/04/2000', 1, 1, [1], false)

    //--------------- Metodo recover -------------------------------
    it('Deveria retornar um Error se a aerovia não existir', ()=>{
        
       expect(() => sut.recover('wrong_id'))
       .toThrowError('Plano de voo não localizado');
     })

    it('Deveria retornar o plano de voo encontrado', ()=>{ 
        
       sut.consists(flightPlan)
       const result = sut.recover('any_id')
       expect(result).toEqual(flightPlan.toJson());
    })

    // --------------- Metodo Consists ---------------------------

    it('Deveria retornar void se o plano de voo foi consistido', ()=>{ 
        
      const result = sut.consists(flightPlan)
      expect(result).toBe();
   })

})
