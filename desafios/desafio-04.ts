// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

// Você pode testar esse código em: https://www.typescriptlang.org/play/?#code/PTAEBYEpQEQQwCYHtQoG5wDZIE6gQKagBmcALgK45wC2BAdmSnfQM5b5EU1z4CWrMjj4AjCn2TUANJzJYAFohQAHXKAKClALgCwAKBChARASgAygAVQgZAJQAJQAkANgDsAOgAcAZkdTwn-YYmtgBS1nb23q4u7lKOjgFgJgCyAOJhDgBMAJyuGdlS7u4JxqAAoqbp9hluAIyOAKy+RQaJoADyFEJIrJU1Oe7gWVL1-nrFpawAxjgEGKDcoMo4SADm1Dyg9LyYfPQrFHArBDSgAI4URISsBABWcHhI9ISgk1iTFJhEKgQ4kwyUHGeMyWGn+cAA5wBjlDnIivBC8DRyZCgMizS7-Zb4dBYNRMOSYUAsdiEhH8QTCMQSXBwVygQDABPpdmicKQ-qAAGLkKi0f5ICbIlAAb30oDFoAA2kjtKAKbsVgBdLSbbgiH4Abn0AF99EzGD82URzD8-owDpguZR1nzQCK9OL1JpkMq5XtNfbxcoTf9zS6hPL3TqxnpJo9BCRudbGEhzLgBdpLTyWEx4yjQABeW2i8UWZXRSJ+KTZsUhZXeaJRHzF0CpZXZPL9GLV8p15x1equcBNj1ijpdVjKvoDHIjbXu-TECj0SZkPiPF5vD73Y2-H1YRNRpgAClIVt50eVG-3KadSGgdodnzIqKQBKPyZQmYADOOeyQ1FvQ2xr9KUbsI3uD7ntWDr4uukbHigADUma7kmfJSqeCrug6QbVl+4ZequZpwAIyorqaAIWhBD4SgqGaSsh1bEB+GE-qeoD-nBm5nlmb4OnRizejhhKZjuJEIb+SDkWAYHEYBfLQAAVKANRPi+IGetxAICK4ygUKw8hbkKjqCjIWGEb6XHYURrhMByfAAB4EAgW4ZNAWqQCh4poW+MxWvQto3neAnRvpykHAIoBaoGuohmG14zKwHyChRryYO8mDLgF4ESdG-FpUwsY4KmZ6vhhSCfK42ArFuAAG942mJyoOKA9hClFMVKGZt6pfB0YtRZ1m2fZWplU5+iNZggpqSlqk0TlcCTFpfBoic6YAHxsRxYaFQQxWrOV9WzccrhCVqyrbXNo0meaWoAKT9YGTlAA

interface FaturamentoEstado {
  [estado: string]: number;
}

interface PercentualFaturamento {
  estado: string;
  percentual: string;
}

const faturamentoPorEstado: FaturamentoEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentualFaturamento(faturamento: FaturamentoEstado) {
  let totalFaturamento = 0;

  for (const estado in faturamento) {
    totalFaturamento += faturamento[estado];
  }

  const percentuais: PercentualFaturamento[] = [];
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    percentuais.push({ estado, percentual: percentual.toFixed(2) });
  }

  return { totalFaturamento, percentuais };
}

const resultado = calcularPercentualFaturamento(faturamentoPorEstado);

console.log(`Faturamento total: R$ ${resultado.totalFaturamento.toFixed(2)}`);
resultado.percentuais.forEach((item) => {
  console.log(`${item.estado}: ${item.percentual}%`);
});
