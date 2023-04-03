const valorResultado = document.getElementById("resultado");

const perimetroCuadrado = (perimetro) => perimetro * 4;
const areaCuadrado = (perimetro) => perimetro * perimetro;

const perimetroTriangulo = (ladoA, ladoB, ladoC) => ladoA + ladoB + ladoC;
const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = (radio) => 2 * radio;
const perimetroCirculo = (radio) => parseFloat(2 * Math.PI * radio).toFixed(1);
const areaCirculo = (radio) =>
  parseFloat(Math.PI * Math.pow(radio, 2)).toFixed(1);

function calcularPerimetroCuadrado() {
  let txtCuadrado = document.getElementById("txtCuadrado");
  let cuadrado = Number(txtCuadrado.value);

  const resultado = `El perímetro  de cuadrado es: ${perimetroCuadrado(
    cuadrado
  )} cm.`;
  valorResultado.innerHTML = resultado;
}

function calcularAreaCuadrado() {
  let txtCuadrado = document.getElementById("txtCuadrado");
  let cuadrado = Number(txtCuadrado.value);

  const resultado = `El área de cuadrado es: ${areaCuadrado(cuadrado)} cm^2.`;
  valorResultado.innerHTML = resultado;
}
function calcularPerimetroTriangulo() {
  let txtLadoA = document.getElementById("txtLadoA");
  let txtLadoB = document.getElementById("txtLadoB");
  let txtLadoC = document.getElementById("txtLadoC");

  let lado1 = Number(txtLadoA.value);
  let lado2 = Number(txtLadoB.value);
  let lado3 = Number(txtLadoC.value);

  const resultado = `El perímetro del triángulo es: ${perimetroTriangulo(
    lado1,
    lado2,
    lado3
  )} cm.`;
  valorResultado.innerHTML = resultado;
}
function calcularAreaTriangulo() {
  let txtBase = document.getElementById("txtBaseTriangulo");
  let txtAltura = document.getElementById("txtAlturaTriangulo");

  let base = Number(txtBase.value);
  let altura = Number(txtAltura.value);

  const resultado = `El área del triángulo es: ${areaTriangulo(
    base,
    altura
  )} cm^2.`;
  valorResultado.innerHTML = resultado;
}

function calcularDiametroCirculo() {
  let txtradio = document.getElementById("txtRadioCirculo");
  let radio = Number(txtradio.value);

  const resultado = `El diámetro del círculo es: ${diametroCirculo(radio)} cm.`;
  valorResultado.innerHTML = resultado;
}
function calcularPerimetroCirculo() {
  let txtradio = document.getElementById("txtRadioCirculo");
  let radio = Number(txtradio.value);

  const resultado = `El perímetro del círculo es: ${perimetroCirculo(
    radio
  )} cm.`;
  valorResultado.innerHTML = resultado;
}
function calcularAreaCirculo() {
  let txtradio = document.getElementById("txtRadioCirculo");
  let radio = Number(txtradio.value);

  const resultado = `El área del círculo es: ${areaCirculo(radio)} cm.`;
  valorResultado.innerHTML = resultado;
}
