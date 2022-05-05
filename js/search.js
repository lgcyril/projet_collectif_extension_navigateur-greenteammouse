let forbiddenWord = [
    ["connard", "Que veux tu exprimer"],
    ["salope", "Pourquoi ?"],
    ["blabla", "Sais tu que con désigne l'appareil génital féminin, ce n'est pas une insulte"],
]

function researchWord () {
    const bodyText = document.body.innerText;  // On a la page HTML en ENTIER !!!
    let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);
  
for (let i=0; i<forbiddenWord.length; i++) {
    if (arrayString.includes(forbiddenWord[i][0])) {
        //console.log(forbiddenWord[0][0]);
        alert("Nous avons détecté le mot " + forbiddenWord[i][0]+ '\n' + forbiddenWord[i][1]);
        //return true
    }
    //else {
    //    return false
    //}
}


   
}//console.log(researchWord ());
//if (researchWord () = true) {

//researchWord();


//}
let changeColor ='<span style="color:red">' + forbiddenWord[0][0] + '</span>'
document.body.innerHTML=document.body.innerHTML.replaceAll(forbiddenWord[0][0], changeColor);
//document.body.innerHTML = document.body.innerHTML.replaceAll('forbiddenWord', '<span style="color:red">interdit</span>');

const bodyText = document.body.innerText;
let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);

function researchWord2() {
    var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            for (let i=0; i<forbiddenWord.length; i++) {
            //var replacedText = text.replace(forbiddenWord[i][0], '[new word or phrase]');
            if (arrayString.includes(forbiddenWord[i][0])) {
                //console.log(forbiddenWord[0][0]);
                alert("Nous avons détecté le mot " + forbiddenWord[i][0]+ '\n' + forbiddenWord[i][1]);
            }
            }
            //if (replacedText !== text) {
            //    element.replaceChild(document.createTextNode(replacedText), node);
            //}
    }
}
}
}

researchWord2();


function researchWord3(){
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace('le', 'Virginie');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
}

//researchWord3();

// document.getElementById('test').innerHTML = forbiddenWord[0][0] + '<br>';
// document.getElementById('test').innerHTML  += forbiddenWord[0][1];
// document.getElementById("test").innerHTML += testString + '<br>';
// document.getElementById("test").innerHTML += "Est-ce une insulte ? " + researchWord (testString) + '<br>'
// document.getElementById("test").innerHTML += "Pourquoi ? car tu m'as traité de : " + forbiddenWord + " ! Je me sens blessé !"



