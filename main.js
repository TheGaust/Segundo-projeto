const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome');
    const inputNumeroAgenda = document.getElementById('telefone');

    if(numeros.includes(inputNumeroAgenda.value)) {
        alert(`O número digitado já está incluso na agenda.`);
    } else {
        numeros.push(inputNumeroAgenda.value);
        nomes.push(inputNomeAgenda.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputNumeroAgenda.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
