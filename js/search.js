function researchWord () {
    const bodyText = document.body.innerText;  // On a la page HTML en ENTIER !!!
    let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);
    let compteur=0;
// for (let i=0; i<arrayString
    if (arrayString.includes(forbiddenWord)) {
        console.log(compteur++);
        return true
    }
    else {
        return false
    }
}
// let testString = "Espèce de canard laqué! Grosse insulte!";
let forbiddenWord = "nous";
console.log(researchWord ());
if (researchWord () = true) {


}
document.body.innerHTML=document.body.innerHTML.replaceAll('forbiddenWord', '<span sytle="color:red">forbiddenWord</span>');


// document.getElementById("test").innerHTML += testString + '<br>';
// document.getElementById("test").innerHTML += "Est-ce une insulte ? " + researchWord (testString) + '<br>'
// document.getElementById("test").innerHTML += "Pourquoi ? car tu m'as traité de : " + forbiddenWord + " ! Je me sens blessé !"









