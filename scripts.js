document.addEventListener("DOMContentLoaded", function () {
  // Função para calcular a data de retorno e último dia da licença
  function calcularLicenca() {
    var inputDataInicial = document.getElementById("inputDataInicial").value;
    var inputNumeroDias = document.getElementById("inputNumeroDias").value;

    if (inputDataInicial && inputNumeroDias) {
      var numeroDias = parseInt(inputNumeroDias, 10);

      // Verifica se o número de dias é válido
      if (numeroDias < 1) {
        document.getElementById("mensagemErro").innerText =
          "O nº de dias deve ser 1 ou maior.";
        return; // Não calcula nada se o número de dias for inválido
      } else {
        document.getElementById("mensagemErro").innerText = "";
      }

      var dataInicial = new Date(inputDataInicial);

      // Calcula o último dia da licença
      var ultimoDiaLicenca = new Date(dataInicial);
      ultimoDiaLicenca.setDate(ultimoDiaLicenca.getDate() + numeroDias - 1);

      // Calcula o dia de retorno
      var retornoAtividades = new Date(dataInicial);
      retornoAtividades.setDate(retornoAtividades.getDate() + numeroDias);

      // Atualiza os campos
      document.getElementById("inputUltimoDia").valueAsDate = ultimoDiaLicenca;
      document.getElementById("inputRetorno").valueAsDate = retornoAtividades;
    }
  }

  // Função para calcular a diferença de dias entre duas datas
  function calcularDiferencaDias() {
    var inputDataInicial2 = document.getElementById("inputDataInicial2").value;
    var inputDataFinal2 = document.getElementById("inputDataFinal2").value;

    if (inputDataInicial2 && inputDataFinal2) {
      var dataInicial2 = new Date(inputDataInicial2);
      var dataFinal2 = new Date(inputDataFinal2);

      // Calcula a diferença de dias
      var diferencaDias =
        (dataFinal2 - dataInicial2) / (1000 * 60 * 60 * 24) + 1;

      // Atualiza o campo
      document.getElementById("inputNumeroDias2").value = diferencaDias;
    }
  }

  // Adiciona os event listeners para os campos relevantes
  var camposLicenca = ["inputDataInicial", "inputNumeroDias"];
  var camposDiferencaDias = ["inputDataInicial2", "inputDataFinal2"];

  camposLicenca.forEach(function (campo) {
    var elemento = document.getElementById(campo);
    elemento.addEventListener("change", calcularLicenca);
    elemento.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão (recarregamento da página)
        calcularLicenca();
      }
    });
  });

  camposDiferencaDias.forEach(function (campo) {
    var elemento = document.getElementById(campo);
    elemento.addEventListener("change", calcularDiferencaDias);
    elemento.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão (recarregamento da página)
        calcularDiferencaDias();
      }
    });
  });
});

function validarNumeroDias(inputNumeroDias) {
  var valor = inputNumeroDias.value;

  // Converte o valor para um número inteiro
  var numeroDias = parseInt(valor, 10);

  // Verifica se o valor é menor que 1
  if (numeroDias < 1) {
    document.getElementById("mensagemErro").innerText =
      "O nº de dias deve ser 1 ou maior.";
    inputNumeroDias.setCustomValidity("O número de dias deve ser 1 ou maior.");

    // Limpa os campos de resultado se o número de dias for inválido
    document.getElementById("inputUltimoDia").value = "";
    document.getElementById("inputRetorno").value = "";
  } else {
    document.getElementById("mensagemErro").innerText = "";
    inputNumeroDias.setCustomValidity("");
  }
}
