
//função para formatar o horario
export default function timeToString(data){
   return data.map(value=> {
        if(value > 9){
            return   value.toString() + ':00' 
        }else{
            return  '0' + value.toString() + ':00'
        }
    } )    
}