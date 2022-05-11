let forbiddenWord = ["connard", "salope", "blabla"]
let fields = document.querySelectorAll('input', 'textarea');
let j;
//console.log(fields[0].value);

// Pour tous les éléments dans 'fields', diviser la valeur des éléments en mots puis détecter les mots inclus dans le tableau 'forbiddenWord'
function researchWord (event) {
    event.preventDefault();
    //console.log(event);
    for (j of fields) { // Ici J est un élément (la valeur) du tableau field
        //console.log(j);
        let arrayString = j.value.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
        //console.log(arrayString);
        // OU
        //for (let j in fields) { => Ici J est un indice
        //let arrayString = fields[j].value.split(' ');  //

        for (let i=0; i<forbiddenWord.length; i++) {
            if (arrayString.includes(forbiddenWord[i])) {
                let answer = confirm("Nous avons détecté le mot " + forbiddenWord[i] + "\n" + "Es-tu bien sûr.e de vouloir envoyer ce message ?");
               if(answer === true){
                // Code à éxécuter si le l'utilisateur clique sur "OK"    
                document.querySelector('input', 'textarea').submit;
               } 
            }
        }
    }
}

document.addEventListener('submit', researchWord);

// API
/*let cache = {};
const request = (url, params = {}, method = "POST") => {
  let cacheKey = JSON.stringify({ url, params, method });
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }
  let options = {
    method
  };
  if ("POST" === method) {
    url += "?" + new URLSearchParams(params).toString();
    console.log(url)
  } else {
    options.body = JSON.stringify(params);
  }
  const result = fetch(url, options).then((response) => response.json());
  cache[cacheKey] = result;
  return result;
};
const get = (url, params) => request(url, params, "GET");
const post = (url, params) => request(url, params, "POST");
// Test.
post("https://api.sightengine.com/1.0/text/check.json",{
    'text': j,
    'mode': 'standard',
    'lang': 'fr',
    'opt_countries': 'us,gb,fr',
    'models': 'nudity,wad,offensive,text-content,gore,text',
    'api_user': '1817344764',
    'api_secret': 'uZ2h84C8TtHs3nkhrbE6',
}).then((post) => {
  //document.getElementById("app").innerHTML += 'text : putain ça marche!<br>models : nudity,wad,offensive,text-content,gore,text<br>'
  //+ post.status;
  console.log(post);
  console.log(post.status);

});*/



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
