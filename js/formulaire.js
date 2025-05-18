document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const sujet = document.getElementById("objet").value;
    const message = document.getElementById("message").value;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=held.esteves@gmail.com&su=${encodeURIComponent(
      sujet
    )}&body=${encodeURIComponent(`Email de l'utilisateur : ${email}\n\n${message}`)}`;

    window.open(gmailLink, '_blank'); // ouvre dans un nouvel onglet
  });