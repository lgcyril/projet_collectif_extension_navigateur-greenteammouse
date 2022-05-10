let forbiddenWord = [
    ["connard", "Que veux tu exprimer"],
    ["salope", "Pourquoi ?"],
    ["blabla", "Sais tu que con désigne l'appareil génital féminin, ce n'est pas une insulte"],
]

let fields = document.getElementsByTagName('input','textarea');

function researchWord () {
    // const bodyText = document.body.innerText;  // On a la page HTML en ENTIER !!!
    let arrayString = fields.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log(arrayString);
  
for (let i=0; i<forbiddenWord.length; i++) {
    if (arrayString.includes(forbiddenWord[i][0])) {
        //console.log(forbiddenWord[0][0]);
        alert("Nous avons détecté le mot " + forbiddenWord[i][0]+ '\n' + forbiddenWord[i][1]);
        //return true
    }
    //else {
    //    return falsefff
    //}
}


   
}//console.log(researchWord ());
//if (researchWord () = true) {

// researchWord();


//}
// let changeColor ='<span style="color:red">' + forbiddenWord[0][0] + '</span>'
let changeForbiddenWord ='???' + forbiddenWord[0][0] + '?!!'
//document.body.innerHTML=document.body.innerHTML.replaceAll(forbiddenWord[0][0], changeForbiddenWord);
//document.body.innerHTML = document.body.innerHTML.replaceAll('forbiddenWord', '<span style="color:red">interdit</span>');

const bodyText = document.body.innerText;
let arrayString = bodyText.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
    console.log("arrayString : ");
    console.log(arrayString);

    










    

function researchWord2() {
    // let formElements = document.getElementsByTagName('form');  // recupere toutes les balises p, div, ... dans un TABLEAU
    // console.log ("elements : ");  // affiche un tableau
    // console.log (elements);  // affiche un tableau
    
    // let displayTest=false;
    // let motinterdit="";
    // let fields = document.getElementsByTagName('input','textarea');

    // for (let i in formElements) {  // in ou of pareil il parcourt TOUT le tableau de A à Z et tu ne peux pas t'arrêter en cours!
        // if (!formElements[i].getElementsByTagName ||
        //     formElements[i].getAttribute('ok')) continue;
        // formElements[i].setAttribute('ok', 'ok')
       
    
        // for (var j in fields) {


for (var i = 0; i < fields.length; i++) {
    var element = fields[i];  // recupere chaque element du tableau elements dans element
    console.log ("element : ");  // affiche un tableau
    console.log (element);  // affiche un tableau

    console.log("node : ")
    console.log(node)

    if (node.nodeType == "input") {   // type TEXT
        var text = node.nodeValue;  // pas que le texte

        console.log("text : ")
        console.log(text)
        
        for (let l=0; l<forbiddenWord.length; l++) {
            //var replacedText = text.replace(forbiddenWord[i][0], '[new word or phrase]');
            if (text.includes(forbiddenWord[l][0])) {
                //console.log(forbiddenWord[0][0]);
                // motinterdit=k;
                document.body.innerHTML=document.body.innerHTML.replaceAll(forbiddenWord[0][0], changeForbiddenWord);
              alert("Nous avons détecté le mot " + forbiddenWord[l][0]+ '\n' + forbiddenWord[l][1]);
              //displayTest=true;
            //   break;
            }  // fin if
        }  // fin for
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];   // node enfants : div, de div de div ....
        console.log ("node :");  // ne va pas dedans
        console.log (node);

        if (node.nodeType == "input") {   // type TEXT
            var text = node.nodeValue;  // pas que le texte

            console.log("text : ")
            console.log(text)
            
            for (let k=0; k<forbiddenWord.length; k++) {
                //var replacedText = text.replace(forbiddenWord[i][0], '[new word or phrase]');
                if (text.includes(forbiddenWord[k][0])) {
                    //console.log(forbiddenWord[0][0]);
                    // motinterdit=k;
                    document.body.innerHTML=document.body.innerHTML.replaceAll(forbiddenWord[0][0], changeForbiddenWord);
                  alert("Nous avons détecté le mot " + forbiddenWord[k][0]+ '\n' + forbiddenWord[k][1]);
                  //displayTest=true;
                //   break;
                }  // fin if
            }  // fin for
            //if (replacedText !== text) {
            //    element.replaceChild(document.createTextNode(replacedText), node);
            //}
        }  // fin if   
    }  // fin for
}  // fin for

    // Affiche une seule fois à la fin:
    // if (displayTest) {
    //     alert("Nous avons détecté le mot " + forbiddenWord[motinterdit][0]+ '\n' + forbiddenWord[motinterdit][1]);

    // }

}  // fin fonction

//researchWord2();


// function researchWord3(){
// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace('le', 'Virginie');

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }
// }

//researchWord3();

// document.getElementById('test').innerHTML = forbiddenWord[0][0] + '<br>';
// document.getElementById('test').innerHTML  += forbiddenWord[0][1];
// document.getElementById("test").innerHTML += testString + '<br>';
// document.getElementById("test").innerHTML += "Est-ce une insulte ? " + researchWord (testString) + '<br>'
// document.getElementById("test").innerHTML += "Pourquoi ? car tu m'as traité de : " + forbiddenWord + " ! Je me sens blessé !"



