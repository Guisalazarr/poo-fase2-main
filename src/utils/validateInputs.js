import { isValid, parse, format } from 'date-fns';

// função para validar se a data está correta.
export function validDate(date){
    const dateValid = parse(`${date}`, 'dd/MM/yyyy', new Date())
    const dateNow = new Date()

    if(!isValid(dateValid)){
        throw new Error('Data inválida! Data deve estar no formato: dd/MM/yyyy')
    }

    if(dateValid < dateNow){
        throw new Error('Data inválida! Data não pode ser anterior ou igual ao dia de hoje.')
    }
}

//Função para validar a altitude está correta.
export function validAltitude(altitude){
    const altitudes =  [
        25000, 26000, 27000,
        28000, 29000, 30000,
        31000, 32000, 33000,
        34000, 35000
        ]

        if(!altitudes.includes(altitude)){
            throw new Error('Altitude inválida! A altitude deve ser multipla entre 25000 e 35000')
        }
}

// Função para se a altitude informada está correta.
export function validTime(time){
    if(time < 1 || time > 24){
        throw new Error('Horário inválido! Deve ser informada apenas a hora entre 1 e 24 \n');    
    }
}