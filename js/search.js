// Pour tous les éléments dans 'fields', diviser la valeur des éléments en mots puis détecter les mots inclus dans le tableau 'forbiddenWord'
function researchWord (event) {
  let fields = document.querySelectorAll('input', 'textarea');
  let j;
  event.preventDefault();
  for (j of fields) { // Ici J est un élément (HTML ou balise) du tableau field
      //let arrayString = j.value.split(' ');  // Créer un tableau de CHAQUE MOT de bodyText
      // OU
      //for (let j in fields) { => Ici J est un indice
      //let arrayString = fields[j].value.split(' ');
      console.log("Dans for j, valeur de submit : " + document.querySelector('input', 'textarea').submit);
      // API :
      let cache = {};
      const request = (url, params = {}, method = "POST") => {
      let cacheKey = JSON.stringify({ url, params, method });
      if (cache[cacheKey]) {
          console.log("Dans if cache, valeur de cache : " + cache[cacheKey]);
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
      return post("https://api.sightengine.com/1.0/text/check.json",{
          'text': j.value,  // liste des mots tapés dans le formulaire
          'mode': 'standard',
          'lang': 'fr',
          'opt_countries': 'us,gb,fr',
          'models': 'nudity,wad,offensive,text-content,gore,text',
          'api_user': '1817344764',
          'api_secret': 'uZ2h84C8TtHs3nkhrbE6',
      }).then((post) => {   // la promesse peut mettre un temps a executer mais le formulaire est envoye
          console.log(post);
          console.log(post.status);
         // console.log(post.profanity.matches[0].match);  // affiche le mot ijurieux
         console.log(post.profanity.matches.length);
          if (post.profanity.matches.length != 0) { // il y a une insulte!
              let answer = confirm("Nous avons détecté le mot " + post.profanity.matches[0].match + "\n" + "Es-tu bien sûr.e de vouloir envoyer ce message ?");
              console.log("Dans if, valeur de answer : " + answer);
              if(answer === true){  // clique OK
                  // Code à éxécuter si le l'utilisateur clique sur "OK"
                  console.log("Dans if TRUE, valeur de submit : " + document.querySelector('#search').submit());
                  document.getElementById('search').submit();  // envoie la recherche
              } else {
                 //event.stopPropagation();  // sinon ca bloque l'envoi preventDefault
              }  // fin else
          }  // fin if
      }); // fin then((post)
  } // fin for
}  // fin fonction

document.addEventListener('submit', researchWord);
