const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var filesGivenPath=[];
var letter
var contador = 0;

rl.question("Escribe tu path:", function(aa) {
    filesGivenPath = fs.readdirSync(aa);
    rl.question("Elige una letra:", function(bb) {
        letter = bb;
         rl.close();
     });    
});

rl.on("close", function() {
    filesGivenPath.forEach(Element => {
        if (Element.startsWith(letter)) {
            contador++;
        }
    });
    console.log("Tus files son: " , filesGivenPath);
    console.log('Tus files ordenados a la inversa son: ', filesGivenPath.reverse());
    console.log('La cantidad de files que comienzan con la letra: "', letter, '" es: ', contador);    
    process.exit(0);
});