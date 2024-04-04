const cursoInfo = document.querySelectorAll('.cursoInfo');

cursoInfo.forEach(article => {
article.addEventListener('click', function() {
    const cursoNome = this.querySelector('h3 a').innerText;
    const cursoValor = this.querySelector('#valor').innerText;
    const cursoData = this.querySelector('#dataIngresso').innerText;
    const cursoParcelas = this.querySelector('#parcelas').innerText;

    // Atualiza os valores dos campos no formulário
    document.getElementById('cursoNome').value = cursoNome;
    document.getElementById('cursoValor').value = cursoValor;
    document.getElementById('cursoDataIngresso').value = cursoData;
    document.getElementById('cursoParcelas').value = cursoParcelas;
});   
} );
