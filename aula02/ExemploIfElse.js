const leia = require ('readline-sync')

let nota1, nota2, media

nota1 = leia.questionFloat('Digite a primeira nota:')

nota2 = leia.questionFloat('Digite a segunda nota:')

//Processamento
media = (nota1 + nota2) /2

if (media >= 6) {
    console.log('Parabens, vc passou')

} else if (media ==5) {
    console.log('Você está de exame!')

} else {
    console.log('Vc reprovou!')
}
