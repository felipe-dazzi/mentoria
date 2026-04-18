// Upsell Logic - Zime Digital

document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    const upsellSection = document.getElementById('upsell-section');
    
    // Smooth appearance sequence
    upsellSection.style.opacity = '0';
    upsellSection.style.transform = 'translateY(20px)';
    upsellSection.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        upsellSection.style.opacity = '1';
        upsellSection.style.transform = 'translateY(0)';
    }, 500);

    // Mostra botão abaixo do vídeo após 1min15s
    setTimeout(() => {
        const vslCta = document.getElementById('vsl-cta');
        vslCta.style.display = 'block';
        vslCta.style.opacity = '0';
        vslCta.style.transition = 'opacity 1s ease';
        setTimeout(() => { vslCta.style.opacity = '1'; }, 50);
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
