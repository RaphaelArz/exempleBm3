$(document).ready(function() {
    function createStarOfDavid() {
        const star = $('<div class="star-of-david"></div>');
        $('#principale').append(star);

        star.css({
            left: Math.random() * $(window).width() + 'px',
            top: '-50px'
        });

        // Modifier la durée de l'animation (en millisecondes) ici
        star.animate({
            top: $(window).height() + 'px'
        }, 8000, 'linear', function() { // 8000 millisecondes = 8 secondes
            $(this).remove();
        });
    }

    $('#invitationButton').click(function() {
        for (let i = 0; i < 35; i++) { // Modifier le nombre d'étoiles ici
            // Modifier le délai entre chaque création d'étoile (en millisecondes) ici
            setTimeout(createStarOfDavid, i * 200); // 500 millisecondes = 0,5 seconde
        }
    });
});
