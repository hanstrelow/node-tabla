const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async(base,listar=false,hasta = 10) => {
 try {

    let salida = "";
      
      for (let index = 0;  index <= hasta; index++) {
        salida += `${base} ${'x'.red} ${index} = ${base * index}\n`;
      }

   
    //para pillar el errro hay que aplicar try catch
    if(listar){
   
        console.log("=================================".green);
        console.log("tabla de multiplicar ");
        console.log("=================================".blue);
        console.log(`${salida}`);
    }
    fs.writeFileSync(`./salida/la tabla de ${base}.txt`, salida);
  
       return `tabla-de-${base}.txt `
 } catch (error) {
    throw error;
 }
}


// const crearArchivo = (base) => {
//     return  new Promise((resolve,reject)=>{
//   console.log("=================================");
//   console.log("tabla de multiplicar xd");
//   console.log("=================================");

//   let salida = "";
 
//     for (let index = 0; index < 11; index++) {
//       salida += `${base} x ${index} = ${base * index}\n`;
//     }
//   //para pillar el errro hay que aplicar try catch

//   fs.writeFileSync(`la tabla de ${base}.txt`, salida);

//      resolve (`tabla-de-${base}.txt creado`)
  
// });
// }


module.exports = { 
    crearArchivo : crearArchivo // se puede dejar solo como crearArchivo
} 
// antigua funcion 
//   const getTabla = (numero) => {
//     numero_nuevo = numero;
//     for (let index = 0; index < 11; index++) {
//       salida += `${numero} x ${index} = ${numero * index}\n`;
//     }
//     return salida;
//   };
