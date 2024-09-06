// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// Você pode testar esse código em: https://www.typescriptlang.org/play/?#code/PTAEFYEpQUQZwMYCcCmA3AhqArgW1AA5ID2A5khrlgI7YqgCWAdmikgC5bFygIYUJ2bFDwAm9PKDjskzUgDoAsACgVIUAEkAsgAUA8gCUAKgEEAckZgAuNWAzR4cLNNlNShYuKltGTAGbESFSiWBgyGGgAl2L0tBgANrQ+KEzhIaBecNhYRCh+bABXTAgMXNgemT65aKW4KUIZecwM6UzEvADPogykxADctqAARg41DdhOSKB+2EwA5wCvIoQkqRhwADS8xLjEWwSBoCgAHii4BPF7oKisSHAoA6rKCMRM0tfobPcAyjJyoABeUAAChcVikfzckHBLn+AIAfKAAN4qUBo0DxFDsUDEbDsAh4wGgADkxMe6Omh2BmOxDCJLnkmLc7AAFqAALSgACMfUYoHhQIADLyGOz2dAUcoKRTcfjCQBqIEuADaDAAuuT0QBfVHo1DsbBIJg4vEE9iPHVPF5vbFCY7sYgwU7nS5EgBE7QoDuuxBQ5SwJGwBCwok9KDpXhIVDdj2t7ztDo0LDY7Ba7SBNy+KF+rlIwITjudF2IkEeKjjxExjLIwIABnpZKRmAlwQASJEFp1nYta2ul8uvOCVlDVvO1pO3VOhtsdk6J5McNO90tAA

const reverseString = (str: string): string => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
};

const textoExemplo = "o rato roeu a roupa do rei de roma";
const textoInvertido = reverseString(textoExemplo);

console.log(`Original: ${textoExemplo}`);
console.log(`Invertido: ${textoInvertido}`);
