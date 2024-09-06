// 2) Dado a sequência de Fibonacci,
//  onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde,
//  informado um número,
//  ele calcule a sequência de Fibonacci
//  e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// Você pode testar esse código em:
//www.typescriptlang.org/play/?#code/PTAECYEpQEQQwCYHtR1AZwKYEcCuArgOwGMBLNBTUAMVICMlC5iyAaAWACgRRRHKMVUoVJk0AByQAnUAAZQVAIwK+ocVIDPAD1IBbFADc4AG2mDd6qlikBD1BiS6KSdBFBHTUzK7iEALphSpNLeoAAUmFqYFqYAXHKsoIqJyRCJAMyJAKyJABwpmRCp6QAsAHQVkBzcYAroxF5GoLi6alJIAOZScE6gTKDGwh24cB3RoHhUlFgAVnAy-JjVPKDCAGbSTsjNrYQAX7qBSMu1mMZUxCbEuOf2WHhEYqACtAxMLKRcK1ReftKEVBaaEOhHQo3GcAMpDBhG2WFU+0O7VWhA2Ui2KHEgQCJCoSFwfQAxyg0PcCCRyGUuF8wABJACyAAUAPIAJQAKgBBABy7IAovE+eh4YijmokAJrCi0RjUH5ugYAJeuAR4EyTGSYfzdBAUKwjNqYNaBR7kPgEySSwKGqE9LUBZ5G4SkbaEFDEDQIUgdJAAbmpnGIjHQflW6FejGYZFAAF5woQWgB9YTiXB+eIJ3R0QKQWIMJDnXyxgB8oAA3lxeLxzqHM4nFBmWtmZHHZP7OFWBpha0nwI2s9a44p25Wq6Q1mE6ym07GY63QAAfBd9JPT0NzoeQCsdztV364KSEUDy3CYdudgC+Ac7Nb6kT8icz-ebsZXunroAA1G-E+BR7wAHcAAtSHOSd70fFpQAAHjjKdCFTPwt3-Xdx3ArQH0zWc4NXBC02Qndd13fdD2PKRTxQy9KKrOtlBw99wHPIif3AV8AQwyDdCYoj2MwqD6I-b860YlCr04FCSKPNYTCwdsxK4NZcBIPxgiPYggMwYgAGtaXDehIw+SdcMQ2JM2bXMDCQF1t07aEI3eMgjPfNdoAAflAINQQLTAylMDowgAAwAEjLeDEIvNRsS1YgqFJHBySeF59Ic0gygC3MPODbzfM6QKQrCtMIsIYlIqkHEYsEB4KT1GhkqjVL0q4eTAw07TdPs+qwlkaBQBARkotxLh1M0nS9LeTrFB6vqBpiobWtGjrDKgXhprK6LMDmkb2rqpbut64BuRKrE1sGlqtrGgzHPASb9v6k7ZrOtqLpSsJ0j2kBDsxGbMCAA

https: const isFibonacci = (num_input: number): boolean => {
  let num_1: number = 0;
  let num_2: number = 1;

  if (num_input === 0 || num_input === 1) {
    return true;
  }

  let next_num: number = num_1 + num_2;
  while (next_num <= num_input) {
    if (next_num === num_input) {
      return true;
    }
    num_1 = num_2;
    num_2 = next_num;
    next_num = num_1 + num_2;
  }

  return false;
};

function checkIsFibonacci(num_input: number): void {
  isFibonacci(num_input)
    ? console.log(`${num_input} pertence a sequência de Fibonacci.`)
    : console.log(`${num_input} não pertence sequência de Fibonacci.`);
}

checkIsFibonacci(0); //Pertence
checkIsFibonacci(1); //Pertence
checkIsFibonacci(2); //Pertence
checkIsFibonacci(20); //Não pertence
checkIsFibonacci(21); //Pertence
checkIsFibonacci(30); //Não pertence
