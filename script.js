const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', function () {
    const atual = document.querySelector('.ativo'); // Fase atual
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // ID da próxima fase

    // Remover a classe 'ativo' da fase atual e mostrar a próxima
    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
  });
});
