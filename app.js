
//app o index es el nombre correcto (es la base y debe de estar en la raiz)
//averiguar sigmatic version
// averiguar licencia MIT 
//leer documentacion de yargs 
//git init para inicializar
//git add. para cargar los archivos (los marca con azul)
//git commit -m (saca una foto y deja un mensaje)
//git checkout -- (recupera archivos eliminados)
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
 require ('colors');
//usando yargs 




console.clear();


//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs ',argv.base);

// const [ , , arg3 = 'base = 5 '] = process.argv;
// const[,base = 5] =arg3.split('=');
// console.log( base );

crearArchivo (argv.b,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
.catch(err=>console.log(err));


  