document.addEventListener('DOMContentLoaded', () => {
    // Animación suave al cargar la página
    const content = document.querySelector('.construction-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        content.style.transition = 'opacity 1s ease, transform 1s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 200);

    // Actualización dinámica del progreso
    const progress = document.querySelector('.progress');
    let width = 0;
    const targetWidth = 75;

    const updateProgress = () => {
        if (width < targetWidth) {
            width++;
            progress.style.width = width + '%';
            setTimeout(updateProgress, 20);
        }
    };

    updateProgress();
});