//1-Create a method to get all the files inside given path.
//2-create a method to print all the files.
//3-Create a method to inverse sort and print the files of a given path
//4-create a method to get the amount of files starting with one letter.
// POSTDATA:  AL EJECUTAR ESTA FUNCIÓN SE CUMPLEN LAS 4 CONSIGNAS.
//            TUVE LA INTENCIÓN DE PONER UN SEGUNDO STDIN PARA INGRESAR LA LETRA MANUALMENTE 
//            DESDE CONSOLA PERO NO LOGRÉ IMPLEMENTAR AMBOS, SE ME SUPERPONIAN
const fs = require('fs');

( function() {
        console.log("Escribe tu path:");
        var filesGivenPath=[];
        var letter = 'a';
        var contador = 0;
        var stdin = process.openStdin();        
        stdin.addListener("data", function(d) {
            filesGivenPath = fs.readdirSync(d.toString().trim());

            console.log("Tus files son: " , filesGivenPath);
            console.log('Tus files ordenados a la inversa son: ', filesGivenPath.reverse());

            filesGivenPath.forEach(Element => {
                if (Element.startsWith(letter)) {
                    contador++;
                }
            });
    
            console.log('La cantidad de files que comienzan con la letra: "', letter, '" es: ', contador);

            process.exit();
        });        
}
)();