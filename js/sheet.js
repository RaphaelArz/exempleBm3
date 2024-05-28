document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire traditionnel

    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch('https://script.google.com/macros/s/AKfycbwlQp3Ize5tfgAzOJt0cpewv9VtKzfK8K8wcX4hdnTeabUEN76NmqD2qzJEMfR1jZ2Jxw/exec', { // Remplacez par l'URL de déploiement du script Google Apps
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(response => response.text())
        .then(data => {
            alert('Réponse envoyée avec succès');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur lors de la soumission du formulaire');
        });
});

