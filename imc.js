const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite seu peso:\n', (peso) => {
    readline.question('Digite sua altura:\n', (altura) => {
        var imc = (peso) / (altura * altura);
        imc = imc.toFixed(2)
        if(imc < 18.5) {
            console.log( `Seu IMC é ${imc}, tendo o índice de Magreza` )
        } else if(imc >= 18.5 && imc <= 24.9) {
            console.log( `Seu IMC é ${imc}, tendo o índice de Normal` )
        } else if( imc > 24.9 && imc <= 30 ) {
            console.log( `Seu IMC é ${imc}, tendo o índice de Sobrepeso` )
        } else if( imc > 30 ) {
            console.log( `Seu IMC é ${imc}, tendo o índice de Obesidade` )
        }
        readline.close();
    });
});