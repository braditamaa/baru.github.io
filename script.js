var links = [
    "hhttps://wa.me/62895363076706",
    "https://wa.me/62895331518808",
    "https://goo.gl/maps/oBANjFGLUMpvY8js5"
];

var randomIndex = Math.floor(Math.random() * links.length);

var randomLink = document.getElementById("random-link");
randomLink.innerHTML = "<a href='" + links[randomIndex] + "'>" + links[randomIndex] + "</a>";

