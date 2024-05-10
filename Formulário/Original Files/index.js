let matriculas_validas = {
    PRESIDENTE: 1,
    DIGOV: 2,
    DIROFL: 3,
    DIRBEN: 4,
    DTI: 5,
    DGP: 6,
    AUDGER: 7,
    CORREG: 8,
    PROCURADOR: 9,
    COORDENADOR_GERAL: [10, 11],
    OUTRO: null,
};

// Verification of Raio Input
const radioInputs = document.querySelectorAll('input[type="radio"]');
const outroCargoInputTxt = document.getElementById('outro_cargo_txt');

radioInputs.forEach(function(radioInput) {
    radioInput.addEventListener('click', function() {
        if (this.value.toUpperCase() === 'OUTRO') {
            outroCargoInputTxt.disabled = false;
            outroCargoInputTxt.required = true;
        } else {
            outroCargoInputTxt.disabled = true;
            outroCargoInputTxt.required = false;
            outroCargoInputTxt.value = "";
        }
    });
});

// Evento de envio do formulário
document.querySelector('.btn button').addEventListener('click', function(event) {
    event.preventDefault();

    var matricula = document.getElementById("matricula_input").value;
    var cargoSelecionado = document.querySelector('input[name="funcao"]:checked').value.toUpperCase();
    
    if (matriculas_validas.hasOwnProperty(cargoSelecionado) && matriculas_validas[cargoSelecionado] !== null) {
        if (Array.isArray(matriculas_validas[cargoSelecionado])) {
            if (matriculas_validas[cargoSelecionado].includes(parseInt(matricula))) {
                document.querySelector('.form_cargo').submit();
                document.querySelector('.form_matricula').submit();
                alert("Envio realizado com sucesso.")
            } else {
                alert("A matrícula não corresponde ao cargo selecionado. Por favor, verifique e tente novamente.");
            }
        } else {
            if (parseInt(matricula) === matriculas_validas[cargoSelecionado]) {
                document.querySelector('.form_cargo').submit();
                document.querySelector('.form_matricula').submit();
                alert("Envio realizado com sucesso.")
            } else {
                alert("A matrícula não corresponde ao cargo selecionado. Por favor, verifique e tente novamente.");
            }
        }
    } else {
        alert("Cargo inválido. Por favor, selecione um cargo válido.");
    }
});
