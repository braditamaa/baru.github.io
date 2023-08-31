var links = [
    "https://wa.me/6288216516238",
    "https://wa.me/6285727940701",
    "https://wa.me/62895421382934",
    "https://wa.me/6285642682431",
    "https://wa.me/6282220061614",
    "https://wa.me/62895363076706",
 
];

var randomIndex = Math.floor(Math.random() * links.length);

var randomLink = document.getElementById("random-link");
randomLink.innerHTML = "<a href='" + links[randomIndex] + "'>" + links[randomIndex] + "</a>";

