let forbiddenWord = [
    ["connard", "Que veux tu exprimer"],
    ["Salope", "Pourquoi ?"],
    ["Con", "Sais tu que con désigne l'appareil génital féminin, ce n'est pas une insulte"],
]

function researchWord () {
    const bodyText = document.body.innerText;  // On a la page HTML en ENTIER !!!
    let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);
  
// for (let i=0; i<arrayString
   if (arrayString.includes(forbiddenWord[0][0])) {
        //console.log(forbiddenWord[0][0]);
        alert("Nous avons détecté le mot " + forbiddenWord[0][0]+ '\n' + forbiddenWord[0][1]);
        return true
    }
    else {
        return false
    }
}//console.log(researchWord ());
//if (researchWord () = true) {

researchWord();


//}
let changeColor ='<span style="color:red">' + forbiddenWord[0][0] + '</span>'
document.body.innerHTML=document.body.innerHTML.replaceAll(forbiddenWord[0][0], changeColor);
//document.body.innerHTML = document.body.innerHTML.replaceAll('forbiddenWord', '<span style="color:red">interdit</span>');



// document.getElementById('test').innerHTML = forbiddenWord[0][0] + '<br>';
// document.getElementById('test').innerHTML  += forbiddenWord[0][1];
// document.getElementById("test").innerHTML += testString + '<br>';
// document.getElementById("test").innerHTML += "Est-ce une insulte ? " + researchWord (testString) + '<br>'
// document.getElementById("test").innerHTML += "Pourquoi ? car tu m'as traité de : " + forbiddenWord + " ! Je me sens blessé !"



