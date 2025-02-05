document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    let hasShownModal = false;

    // Mostrar modal quando o usuário tentar sair da página
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !hasShownModal) {
            modal.style.display = 'block';
            hasShownModal = true;
        }
    });

    // Fechar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de elementos quando aparecem na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.beneficio, .autor-content, .preco-card').forEach((el) => {
        observer.observe(el);
    });
});