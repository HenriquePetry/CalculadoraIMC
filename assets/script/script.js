const calcular = document.getElementById('calcular');
function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const img = document.getElementById('imagem');

    if (altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        if (valorIMC <= 18.5) {
            classificacao = 'abaixo do peso.';
            img.innerHTML = "<img src=assets/img/abaixodopeso.png>";

        } else if (valorIMC >= 18.6 & valorIMC <= 24.9) {
            classificacao = 'com peso ideal. Parabéns!!!';
            img.innerHTML = '<img src=assets/img/pesonormal.png>';
        } else if (valorIMC >= 25 & valorIMC <= 29.9) {
            classificacao = 'levemente acima do peso.';
            img.innerHTML = '<img src=assets/img/acimadopeso.png>';
        } else if (valorIMC >= 30 & valorIMC <= 39.9) {
            classificacao = 'com obesidade grau I.';
            img.innerHTML = '<img src=assets/img/obeso1.png>';
        } else if (valorIMC >= 40) {
            classificacao = 'com obesidade grau II';
            img.innerHTML = '<img src=assets/img/obeso2.png>';
        }
        resultado.textContent = `seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}
calcular.addEventListener('click', imc);

