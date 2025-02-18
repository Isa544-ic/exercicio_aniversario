function calcularIdade() {
    const dataNascimento = prompt("Digite a data de nascimento (dd/mm/aa)");
    const [dia, mes, ano] = dataNascimento.split("/").map(num => parseInt(num, 10));
    const nascimento = new Date(ano, mes - 1, dia);
    const dataAtual = new Date();
    let idade = dataAtual.getFullYear() - nascimento.getFullYear();
    if (dataAtual.getMonth() < nascimento.getMonth() || (dataAtual.getMonth() === nascimento.getMonth() && dataAtual.getDate() < nascimento.getDate())) {
        idade--;
    }
    alert('Sua idade é ' + idade + ' anos');
}
calcularIdade();