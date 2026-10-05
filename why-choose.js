document.addEventListener("DOMContentLoaded", function() {
    const chooseCards = document.querySelectorAll('.choose-card');
    const infoBoxes = document.querySelectorAll('.choose-info-box');

    chooseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Remove active classes from all cards and info boxes
            chooseCards.forEach(c => c.classList.remove('active-card'));
            infoBoxes.forEach(box => box.classList.remove('active-info'));

            // Add active class to current hovered card
            this.classList.add('active-card');

            // Show corresponding content box
            const targetContentId = this.getAttribute('data-content');
            document.getElementById(targetContentId).classList.add('active-info');
        });
    });
});