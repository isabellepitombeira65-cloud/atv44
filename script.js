// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const body = document.body;

    // Alternar entre o tema claro e o escuro ao clicar no botão
    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Altera o texto e ícone do botão consoante o modo ativo
        if (body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Modo Claro';
        } else {
            darkModeBtn.textContent = '🌙 Modo Escuro';
        }
    });
});