import { SystemFactory } from "./service/system.factory.js"
import PromptSync from 'prompt-sync'
import {validDate, validTime, validAltitude} from './utils/validateInputs.js'

const prompt = PromptSync()
const app = new SystemFactory().systemController()

//controla a saida do while
let exit = false

//Controla o sistema e chama os metodos conforme a escolha do usuário
while(!exit){
    console.log('Informe uma das opções para continuar: ')
    const numChosen = Number(prompt(
        '(1) Listar aerovias  ' +
        '(2) Listar altitudes livre  ' +
        '(3) Submeter plano de voo  ' +
        '(4) Lista plano de voo '+
        '(0) Sair:  '))

     // Chama a operação conforme a escolha do usuário   

     
    switch (numChosen) {
        case 0: 
        exit = true
            break;

        case 1:
        const origin = prompt('Informe a origem: ')// deve informar a sigla, ex: POA
        const destination = prompt('Informe o seu destino: ')// deve informar a sigla, ex: POA
        app.listAirway(origin, destination)
            break;

        case 2: 
        const freeAltitude = inputFreeAltitude()
        app.listFreeAltitude(freeAltitude.id, freeAltitude.date, freeAltitude.time)
            break;

        case 3:
        const {registration, idAirway, prefixAircraft, dateAproove, timeAproove, altitude} = inputAprooveFlightPlan()
        app.aprooveFlightPlan(registration, idAirway, prefixAircraft, dateAproove, timeAproove, altitude)
            break;

        case 4:
        const id = prompt('Informe o ID do plano de voo: ')
        app.listFlightPlan(id)
        break;
            
        default:
        console.log('Valor inválido! Informe um valor de 1 a 4 \n')
        break;
    }

    // função para coletar dados de free altitude
    function inputFreeAltitude(){
        const id = prompt('Informe o ID da aerovia: ')
    
        const date = prompt('Informe a data que deseja consultar: ')
        validDate(date) // valida o formato da data.
    
        const time = Number(prompt('Informe a hora que deseja consultar: '))
        validTime(time) // Valida se o horário informado estão correto.
        
        return {id, date, time}
    }

    // funcção para coletar os dados do plano de voo
    function inputAprooveFlightPlan(){
        const registration = prompt('Informe a sua matricula: ')
        const idAirway = prompt('Informe o ID da aerovia: ')
        const prefixAircraft = prompt('Informe o prefixo da aeronave: ')
    
        const dateAproove = prompt('Informe a data: ')
        validDate(dateAproove)
    
        const timeAproove = Number(prompt('Informe a hora que deseja consultar: '))
        validTime(timeAproove)
        
        const altitude = Number(prompt('Informe a altitude: '))
        validAltitude(altitude) // função para validar se altitude está correta
    
        return{ registration, idAirway, prefixAircraft, dateAproove, timeAproove, altitude} 
    }

}



















