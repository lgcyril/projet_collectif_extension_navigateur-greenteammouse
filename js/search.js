// let forbiddenWord = [
//     ["connard", "Que veux tu exprimer"],
//     ["salope", "Pourquoi ?"],
//     ["blabla", "Sais tu que con désigne l'appareil génital féminin, ce n'est pas une insulte"],
// ]

let forbiddenWord = ["connard", "salope", "blabla"]
let fields = document.querySelectorAll('input', 'textarea');

// Pour tous les éléments dans 'fields', diviser la valeur des éléments en mots puis détecter les mots inclus dans le tableau 'forbiddenWord'
function researchWord () {
    for (let j of fields) { // Ici J est un élément (la valeur) du tableau field
        console.log(j);
        let arrayString = j.value.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText

        // OU
        // for (let j in fields) { => Ici J est un indice 0, 1, ...
        // let arrayString = fields[j].value.split(' ');  

        for (let i=0; i<forbiddenWord.length; i++) {
            if (arrayString.includes(forbiddenWord[i])) {
            //console.log(forbiddenWord[0][0]);
                alert("Nous avons détecté le mot " + forbiddenWord[i] + "\n" + "Es-tu bien sûr.e de vouloir envoyer ce message ?");
            }
        }
    }
}

fields.addEventListener('submit', researchWord());
// document.getElementById('fname').addEventListener('submit', researchWord());