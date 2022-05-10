let forbiddenWord = ["connard", "salope", "blabla"]
let fields = document.querySelectorAll('input', 'textarea');
//console.log(fields[0].value);

// Pour tous les éléments dans 'fields', diviser la valeur des éléments en mots puis détecter les mots inclus dans le tableau 'forbiddenWord'
function researchWord (event) {
    //console.log(event);
    for (let j of fields) { // Ici J est un élément (la valeur) du tableau field
        //console.log(j);
        let arrayString = j.value.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
        //console.log(arrayString);
        // OU
        //for (let j in fields) { => Ici J est un indice
        //let arrayString = fields[j].value.split(' ');  //

        for (let i=0; i<forbiddenWord.length; i++) {
            if (arrayString.includes(forbiddenWord[i])) {
                alert("Nous avons détecté le mot " + forbiddenWord[i] + "\n" + "Es-tu bien sûr.e de vouloir envoyer ce message ?");
            }
        }
    }
}

document.addEventListener('submit', researchWord);


/*document.addEventListener('submit', () => {
    for (let j of fields) { // Ici J est un élément (la valeur) du tableau field
        let arrayString = j.value.split(' '); 
        for (let i=0; i<forbiddenWord.length; i++) {
            if (arrayString.includes(forbiddenWord[i])) {
                alert("Nous avons détecté le mot " + forbiddenWord[i] + "\n" + "Es-tu bien sûr.e de vouloir envoyer ce message ?");
            }
        }
    }
});*/
