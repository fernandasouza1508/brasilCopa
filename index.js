const prompt = require("prompt-sync")();

console.log("desafio copa do mundo - anos em que o brasil foi campeão");
console.log("=======================================================");

const anoscampeao = [1958, 1962, 1970, 1994, 2002];
let tentativas = 0;
let acertos = 0;

while (acertos <5) {
     const pergunta = `em que ano o brasil foi campeãõ da copa do mundo?  (${acertos + 1})`;
     const respotausuario =Number(prompt (pergunta));
     tentativas++;

     if(anoscampeao.includes(respotausuario)){
        console.log("parabéns! Resposta correta!");
        acertos++;
     } else {
        console.log("Resposta incorreta. Tente novamente!");
       }
    }
console.log(`Parabéns! você acertou todas as 5 perguntas em ${tentativas} tentativas.`);

