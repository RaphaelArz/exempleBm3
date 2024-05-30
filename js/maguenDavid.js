$(document).ready(function() {
    function createStarOfDavid() {
        const star = $('<div class="star-of-david"></div>');
        $('#principale').append(star);

        star.css({
            left: Math.random() * $(window).width() + 'px',
            top: '-50px',
            width: '30px', // Taille initiale
            height: '30px' // Taille initiale
        });

        // Modifier la durée de l'animation (en millisecondes) ici
        star.animate({
            top: $(window).height() + 'px',
            width: '0px', // Taille finale
            height: '0px' // Taille finale
        }, 10000, 'linear', function() {
            $(this).remove();
        });
    }

    $('#invitationButton').click(function() {
        for (let i = 0; i < 50; i++) { // Modifier le nombre d'étoiles ici
            // Modifier le délai entre chaque création d'étoile (en millisecondes) ici
            setTimeout(createStarOfDavid, i * 200); // 200 millisecondes = 0,2 seconde
        }
    });
});
