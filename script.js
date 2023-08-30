var links = [
    "https://wa.me/6288216516238?text=Halo%20mas%20awan%20saya%20mau%20tanya%20barang%20elektronik",
    "https://wa.me/6285727940701?text=Halo%20mas%20eko%20saya%20mau%20tanya%20barang%20elektronik",
    "https://wa.me/62895421382934?text=Halo%20mas%20tony%20saya%20mau%20tanya%20barang%20elektronik",
    "https://wa.me/6285642682431?text=Halo%20mas%20andre%20saya%20mau%20tanya%20barang%20elektronik",
    "https://wa.me/6282220061614?text=Halo%20mas%20awan%20wiji%20mau%20tanya%20barang%20elektronik",
    "https://wa.me/62895363076706?text=Halo%20mas%20bagus%20saya%20mau%20tanya%20barang%20elektronik",
 
];

var randomIndex = Math.floor(Math.random() * links.length);

var randomLink = document.getElementById("random-link");
randomLink.innerHTML = "<a href='" + links[randomIndex] + "'>" + links[randomIndex] + "</a>";

