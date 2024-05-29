document.getElementById('addEventButton').addEventListener('click', function(event) {
    event.preventDefault();
    const eventTitle = 'Mon Événement';
    const eventLocation = '123 Rue Exemple, Ville, Pays';
    const eventDetails = 'Description de l\'événement.';
    const eventStart = '20240615T090000Z';
    const eventEnd = '20240615T110000Z';

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

    window.open(calendarUrl, '_blank');
});