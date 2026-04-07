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

    // Skip Link Action (e.g., redirect to thanks page)
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Tem certeza? Esta oportunidade única não aparecerá novamente.')) {
            // Change this to your actual thank choice URL
            window.location.href = 'https://zime.digital/obrigado-pela-compra/';
        }
    });
});
