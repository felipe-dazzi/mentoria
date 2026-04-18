// Upsell Logic - Zime Digital

document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    const upsellSection = document.getElementById('upsell-section');
    
    // Mostra tudo abaixo do vídeo após 1min15s com fade
    setTimeout(() => {
        const belowVideo = document.getElementById('below-video');
        belowVideo.style.display = 'block';
        setTimeout(() => { belowVideo.style.opacity = '1'; }, 50);
    }, 75000);

    // Skip Link Action (e.g., redirect to thanks page)
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Tem certeza? Esta oportunidade única não aparecerá novamente.')) {
            // Change this to your actual thank choice URL
            window.location.href = 'https://zime.digital/obrigado-pela-compra/';
        }
    });
});
