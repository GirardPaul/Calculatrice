
do {

    var operateur = prompt("Que souhaitez- vous faire ? \n\n 1- Addition \n 2- Multiplication \n 3- Soustraction \n 4- Division");

} while (operateur < 0 || operateur > 5 || (operateur != parseInt(operateur)));

console.log(operateur);


do {
    var premierNombre = Number(prompt("Veuillez saisir un premier nombre !"));
    var deuxiemeNombre = Number(prompt("Veuillez saisir un deuxième nombre !"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


function addition(nombreA, nombreB) {

    return (nombreA + nombreB);

}

function multiplication(nombreA, nombreB) {

    return (nombreA * nombreB);

}

function soustraction(nombreA, nombreB) {

    return (nombreA - nombreB);

}

function division(nombreA, nombreB) {

    return (nombreA / nombreB);


}
try {

    switch (operateur) {
        case "1":
            resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case "2":
            resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case "3":
            resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case "4":
            if (deuxiemeNombre == 0) {
                throw new Error("On ne peut pas diviser un nombre par 0");
            }
            resultat = division(premierNombre, deuxiemeNombre);
            break;

        default: throw new Error("Il y a une erreur");

    }

    alert("Le résultat de votre opération est : " + resultat + ".");
}

catch (error) {
    alert(error);
}

finally {
    if (confirm('Voulez refaire un calcul ?')) {
        window.location.reload();
    }
    else {
        exit();
    }
}


