document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuFormulario');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemDiv = document.getElementById('mensagem');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        if (!isNaN(valorA) && !isNaN(valorB) && valorB > valorA) {

            exibirMensagem("Formulário válido!", "green");
        } else {

            exibirMensagem("O número B deve ser maior que o número A.", "red");
        }
    });

    function exibirMensagem(mensagem, cor) {
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.color = cor;
    }
});
