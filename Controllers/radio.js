function animacion() {
    const labels = document.querySelectorAll('#label');
    for (label of labels) {
        const chars = label.textContent.split('');
        label.innerHTML = '';
        for (char of chars) {
            label.innerHTML += '<span>' + char === ' ' ? '&nbsp' : char + '</span>';
        }
    }
}