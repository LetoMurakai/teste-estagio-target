// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// Você pode testar esse código em:
//www.typescriptlang.org/play/?#code/PTAEEYEpQeQIwM4FMBOA3JoD2oAuKkBjACxwBNNCBnsgSwHMcBDOJ2gDywC5RaA7XKACSAOQAiQgMIBRUAF4IAZgA0oAMowAsgEF5oAAyqA0nv0BuALAAoEKGl8AjgFcmAnCYA8w8VNkAzJgBzplAAb1ATBRMAaggzdS1dBQ0dUFijeIBfa1shAFsABxRaPNoUAAoU7UhLGzBtHD9+JgAbUDIcIqxCJAQEJjykN1VnVtBkFABD7FA0VqwUdpC54smMNqqAfmtrQiw+BEF+Oh6ePic8uFQ9cEVa6xakQQQsPKYuc8vrhXMHp9AANYfC5XRY-e5WADuxFoj1A5QBoC8x1oPWgoWsoCxgLSCnAtWx41eIWiCgBtWyVl2+xejwAdC0sPRyi83jUcmAYKACAgnC1cEwOksiW9QABL0AATnAdKAA

https: const indice: number = 13;

let soma: number = 0;
let k: number = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);
// O resultado da soma é 91.
