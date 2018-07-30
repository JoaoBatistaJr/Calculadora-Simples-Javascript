var Valor = 0;
var NovoNum = false;
var ValorOp = "";

//ATRIBUI OS VALORES DE CADA BOTAO PARA O PARAMETRO NUM.
function botao(Num) {
  if (NovoNum) {
    document.form_calc.visor.value = Num;
    NovoNum = false;
  } else {
    if (document.form_calc.visor.value == "0")
      document.form_calc.visor.value = Num;
    else document.form_calc.visor.value += Num;
  }
}

//FUNÇÃO PARA REALIZAR OS CALCULOS
function btn_calc(operacao) {
  if (document.form_calc.visor.value == "") {
    alert("Digite um valor");
    document.form_calc.visor.value = "0";
  } else {
    if (NovoNum && ValorOp != "=");
    else {
      NovoNum = true;
      if ("+" == ValorOp) Valor += parseFloat(document.form_calc.visor.value);
      else if ("-" == ValorOp)
        Valor -= parseFloat(document.form_calc.visor.value);
      else if ("/" == ValorOp)
        Valor /= parseFloat(document.form_calc.visor.value);
      else if ("*" == ValorOp)
        Valor *= parseFloat(document.form_calc.visor.value);
      else Valor = parseFloat(document.form_calc.visor.value);
      document.form_calc.visor.value = Valor;
      ValorOp = operacao;
    }
  }
}

//ATRIBUI O PONTO
function Ponto() {
  var AUX = document.form_calc.visor.value;
  if (NovoNum) {
    AUX = "0.";
    NovoNum = false;
  } else {
    if (AUX.indexOf(".") == -1) AUX += ".";
  }
  document.form_calc.visor.value = AUX;
}

// FUNÇÃO PARA LIMPAR O VISOR.
function limpar() {
  document.form_calc.visor.value = "";
}
