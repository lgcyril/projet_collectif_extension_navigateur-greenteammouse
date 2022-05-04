
function researchWord () {
    const bodyText = document.body.innerText;  // On a la page HTML en ENTIER !!!
    let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);

        // if (arrayString.includes(forbiddenWord)) {

        //     return true
            
        // }
        // else {
        //     return false
        // }
    
    
  

}

// let testString = "Espèce de canard laqué! Grosse insulte!";
let forbiddenWord = "nous";

console.log(researchWord ());

document.body.innerHTML = document.body.innerHTML.replaceAll('forbiddenWord', '<span style="color:red">interdit</span>');

// document.write(researchWord).style.color=red;
// document.getElementById("test").innerHTML += testString + '<br>';
// document.getElementById("test").innerHTML += "Est-ce une insulte ? " + researchWord (testString) + '<br>'
// document.getElementById("test").innerHTML += "Pourquoi ? car tu m'as traité de : " + forbiddenWord + " ! Je me sens blessé !"
