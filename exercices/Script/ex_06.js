let recoverdiv = document.getElementsByTagName("div")[2];

class Hero {
    constructor(name, status, intelligence, strength)
    {
        this.name = name.charAt(0).toUpperCase() + name.substring(1);
        // charAt = renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la position indiquée en argument.
        // toUpperCase = retourne la valeur de la chaîne courante, convertie en majuscules.
        // substring = retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.
        this.status = status;
        this.intelligence = intelligence;
        this.strength = strength;
    }

    toString()
    {
        recoverdiv.innerText += ("Je suis " + this.name + " le " + this.status + ", j'ai " + this.intelligence + " points d'intelligence et " + this.strength + " points de force !\n");
    }
}
let mage = new Hero("amadeus", "mage", 10, 3);
let guerrier = new Hero("pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();