import { v4 as uuidv4 } from 'uuid';
import parseXlsx from 'excel';


parseXlsx('libro.xlsx').then((data) => {
    let arreglo=[];
    data.forEach((el,i) => {
        if(i!==0){
            arreglo.push({
                nombre:el[1],
                apellido:el[2],
                mail:el[5]
            })
        }
    });
    console.log(arreglo);
});