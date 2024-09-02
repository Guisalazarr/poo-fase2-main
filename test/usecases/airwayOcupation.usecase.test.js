import { AirwayOccupation } from "../../src/usecases/airwayOcupation";


describe('Teste unitário da classe Airwayr ocupation', () =>{
    const sut = new AirwayOccupation()

    const altitudes =  [
      25000, 26000, 27000,
      28000, 29000, 30000,
      31000, 32000, 33000,
      34000, 35000
      ]

    //--------------- Metodo freeAltitudes -------------------------------

    it('Deveria retornar as altitudes livres', ()=>{ 
        
       const result = sut.freeAltitude('any_id', '02/09/2024', 1)
       expect(result).toEqual(altitudes);
    })

    it('Deveria retornar as altitudes livres para uma determinada data e aerovia', ()=>{ 

      sut.occupy('any_id', '02/09/2024', 25000, [1])
      const result = sut.freeAltitude('any_id', '02/09/2024', 1)
      
      expect(result).toEqual([26000, 27000,
         28000, 29000, 30000,
         31000, 32000, 33000,
         34000, 35000]);
   })

   
    //--------------- Metodo occupy -------------------------------

    it('Deveria retornar true se a altitude for ocupada com sucesso', ()=>{ 
        
      const result = sut.occupy('any_id', '02/09/2024', 1, [1])
      expect(result).toBe(true);
   })


   //--------------- Metodo isOccupied ------------------------------
   it('Deveria retornar Erro se a altitude já estiver ocupada', ()=>{ 
      
      expect(() => sut.isOccupied('any_id', '02/09/2024', 1, [1]))
      .toThrowError('Altitude já ocupada neste slot de horário');
   })


   it('Deveria retornar void se a altitude não estiver ocupada', ()=>{ 
      
      expect(sut.isOccupied('any_id', '02/09/2024', 1, [2])).toBe()
   })


})
