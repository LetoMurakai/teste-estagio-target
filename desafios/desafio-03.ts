// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Você pode testar esse código em: https://www.typescriptlang.org/play/?#code/PTAEGYEpQEQQwCYHtQFcC2oBuBTALkgE6gCOqOoA5qnIQnKClnADZGgIUBmceqhcdDgB2BDgEsAh4XEpOadAwTiAznhkAjVOOQCANKB4BzhhlAAHQkkoDFB4Qxbjh1OJRyYyFTipwArWgMvUABjVhDUFgoKQnwiYRwALgBYACgQUEAiAlAAeVAhYXZmNmJ5Hj5bETEkEKIZZFAPBQklFHQAK5UAbjSM7LzFWWJi9jLefkEqlBq6nRQms2VW-M6e9LBsgDkAL6ErDm9xOBVQQpWTpuCmVlHuccrROSkZFC4kcVAVVHMcF+IAA-yAEulvkRCpWAA6NK9MAASQAsgAFHIAJQAKgBBTbogCiKXWoDg0AAqhDiCg-CokMJGKhQAAPdAsCQqcw0gC3uBZtXQrxpeG8SBO9GQIte90mjzBwghLDWGQ00CRSE4mBwDNUeHEpSOJ18mHKEwKBAMvJQhROXGccFUB0+HjgDkahl+RzFkNAuLUOBFeoOuEwvmI4kohQEYtOKBCkhYETYHAY6BBRzWaWcgsIPBCFDhADFJSaUABvNKgcstRKnDAaX5rCuGQtTKvCGt1tIAXxhhJVxGEAGP5sJaqIBBSiYQyOIsCgAFIAZRymwMsWpLCwHxCMlojEYGj8cSjoQAz8pKEhoakR2pGxUpQQEeDWFX803HgBtAC6oAAvKB32WFbFqAABESwgVWACMBggUaDwEBBoAAExIZBkIAKygB2BigBk844NQwj0AAtFwOA6nAgHlsBYFHIhSEwXB95IIhkEAAxsVhOHlhk6K-CYpHkQIVGgDR4FVuAjFvghEkABxsZCABsXE8WAACKNCEHgcCCRRIliXRVYACxSXeRaIehimcdhDYZBpGY6WRempA2BlwBZpnGlMiFGeh1ncbhYD4Qy2m6cJLlAaB4mgIpnnwSxVb+Q2qmgPOkgaIgKAABTWpg8gGk6xL6VFhmgAA7HFzGIUlyUZDASDoM456gDl4h5RQBUOJAxW0e5VayZV5lVn5NUpfhhEkU54WuSVfWgAAnIN3lVlZo2BaAfGEAJU2URF1GzaxbFLY8iFlRxKkpRptChTtPXRZB0GgUxQ2gGt632aIjlCQwOVupl3V7aJB1QQxT3SQlEDnTZY0ajd313aVkGSWDZnLa9F0Vnh6WZS1uX2p1RWA25rEmSjXknYlGMpfVjUuNleP5Y6XUI3NkHocdMmgOhfkY3hBGoERX3OZ+aapFwAshNqNKhOEkS0AWqOPDl4OPrKz6gK+isEF+0CloDUR4DKRAK+TBAtm2xB-mx9YVgb+S2sb4Pm+gtaW69NvlnbBDaSwJvxc7ru-u7Il20sKgAMINX7zEB78QfWyJInPVMqtypCbyELicAhAAFlloI-gAfKJIkNuIXAtUs6fg6AxdsbrpfJeW5ctQUjtaygP5d+jAA+PctNXHegAAPEbhDR0WDeA03Tdt+PNd-lXyePB7M-ll208zy3+dHIPpsoMXgzt-vU9r2vR-z0Pi+78vBCr2vG9nxW3usBPUygAA1NfcB7-F98z2HSO6A36PA-h-f+68RIdkgKLBs15DZCCWKnVgQcX6+xrmAQBUdwawIrPAloKhMQhDanAeAj4C63n3sglg6dxAsEzDvBgRcB63wPmCJBT4WCQEhFEFweAc64PLLECotI9bnxEMfeKehG7lgviA00MiCFEJIWQnASwoFrA3mkfBq5IjaQaH+MIcY5aX33srDu1CYHdmvEgKIPDrBZQAAaq3YKwww7x7SogACSgC8cWXR9DMqQjnvIpAHZHFWKvDSNcOB7GUCcQiB2xA3FvA+PIbxvj-G+j0UEuR4NwmRJsXYtg8THF+ICfoi8YdlGKFUUsDsBDQgNUofFIkxDFCJmBFXCJXQgA

interface IFaturamento {
  dia: number;
  faturamento: number;
}

// Por não encontrar o arquivo JSON, resolvi criar o objeto no código.
const faturamentoMensal: IFaturamento[] = [
  { dia: 1, faturamento: 221.5 }, // Segunda-feira
  { dia: 2, faturamento: 100 }, // Terça-feira
  { dia: 3, faturamento: 380.6 }, // Quarta-feira
  { dia: 4, faturamento: 560 }, // Quinta-feira
  { dia: 5, faturamento: 450 }, // Sexta-feira
  { dia: 6, faturamento: 0 }, // Sábado (fim de semana)
  { dia: 7, faturamento: 0 }, // Domingo (fim de semana)
  { dia: 8, faturamento: 500 }, // Segunda-feira
  { dia: 9, faturamento: 600 }, // Terça-feira
  { dia: 10, faturamento: 700 }, // Quarta-feira
  { dia: 11, faturamento: 0 }, // Quinta-feira (feriado)
  { dia: 12, faturamento: 300 }, // Sexta-feira
  { dia: 13, faturamento: 0 }, // Sábado (fim de semana)
  { dia: 14, faturamento: 0 }, // Domingo (fim de semana)
  { dia: 15, faturamento: 550 }, // Segunda-feira
];

function calcularFaturamento(faturamentoMensal: IFaturamento[]) {
  let menorFaturamento: number = 0;
  let maiorFaturamento: number = 0;
  let totalFaturamento: number = 0;
  let diasComFaturamento: number = 0;

  faturamentoMensal.forEach((dia) => {
    if (dia.faturamento > 0) {
      if (menorFaturamento === 0 || dia.faturamento < menorFaturamento) {
        menorFaturamento = dia.faturamento;
      }
      if (dia.faturamento > maiorFaturamento) {
        maiorFaturamento = dia.faturamento;
      }
      totalFaturamento += dia.faturamento;
      diasComFaturamento++;
    }
  });

  const mediaMensal = totalFaturamento / diasComFaturamento;

  const diasAcimaDaMedia = faturamentoMensal.filter(
    (dia) => dia.faturamento > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor faturamento foi de R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento foi de R$ ${resultado.maiorFaturamento}`);
console.log(
  `${resultado.diasAcimaDaMedia} dias com faturamento acima da média.`
);
