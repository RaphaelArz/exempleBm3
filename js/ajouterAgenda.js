document.getElementById('addEventButton').addEventListener('click', function(event) {
    event.preventDefault();
    const eventTitle = 'Bar-Mitsvah Gabriel';
    const eventLocation = '14 Rue des Rouges Gorges, Saint-Brice sous-foret';
    const eventDetails = 'Mise des téphilines de Gabriel.';
    const eventStart = '20250323T073000Z';
    const eventEnd = '20250323T103000Z';

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

    window.open(calendarUrl, '_blank');
});