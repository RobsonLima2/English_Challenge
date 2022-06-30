// //Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy 

// //Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

let comedy = [{
    title:'White Chicks',
    director:'Keenan Ivory Wayans',
    year:2004
},{
    title:'The Hangover',
    director:'Todd Phillips',
    year:2009
},{
    title:'yes day',
    director:'Miguel Arteta',
    year:2021
}]
console.log(comedy)

let action = [{
    title:'John Wick',
    director:'Chad Stahelski',
    year:2014
},{
    title:'The Dark Knight',
    director:'Christopher Nolan',
    year:2008
},{
    title:'Matrix',
    director:'As Wachowski',
    year:1999
}]
console.log(action)

let fantasy = [{
    title:'Luca',
    director:'Enrico Casarosa',
    year:2021
},{
    title:'The Dark Knight',
    director:'Christopher Nolan',
    year:2008
},{
    title:'Avengers: Endgame',
    director:'Anthony Russo and Joe Russo',
    year:2019
}]
console.log(fantasy)

// *DESAFIO EXTRA* 

// //Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 

let movie = 'best'
if (movie === 'best' || movie === 'Best') {
    console.log(`MY FAVORIT MOVIE IS ${action[2].title}`)
    
}else{
    console.log('NOT EVEN 5 STARS')
}