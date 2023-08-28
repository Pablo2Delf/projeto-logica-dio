//menor do que 1.000 = ferro 
//entre 1.001 e 2.000 = bronze
//entre 2.001 e 5.000 = prata
//entre 5.001 e 7.000 = ouro
//entre 7.001 e 8.000 = platina
//entre 8.001 e 9.000 = ascendente 
//entre 9.001 e 10.000 = imortal
//>= 10.001 = radiante

let nome = "Peter" 
let experiencia = 99
let classificação = ""

if(experiencia <= 1000){
    classificação = "ferro"
} else if(experiencia >= 1001 && experiencia <= 2000){
    classificação = "bronze"
} else if(experiencia >= 2001 && experiencia <= 5000){
    classificação = "prata"
} else if(experiencia >= 5001 && experiencia <= 7000){
    classificação = "ouro"
} else if(experiencia >= 7001 && experiencia <= 8000){
    classificação = "platina"
} else if(experiencia >= 8001 && experiencia <= 9000){
    classificação = "ascendente"
} else if(experiencia >= 9001 && experiencia <= 10000){
    classificação = "imortal"
} else 
    classificação = "radiante"




console.log("O heroi de nome " + nome + " esta no nivel de: " + classificação) 