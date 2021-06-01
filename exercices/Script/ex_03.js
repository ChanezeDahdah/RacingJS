var click = document.querySelector("footer > div");

click.onclick = function erfef(){
    do
        var nom = prompt("Quel est votre nom ?");

    while (nom == "" || nom == null);

    if (confirm ("Êtes-vous sûr que " + nom +  " est votre nom ?")) {
        alert("Bonjour " +nom);
        click.innerHTML = nom;

    } else {
        return false;
}
}