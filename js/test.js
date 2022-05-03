let cache = {};
const request = (url, params = {}, method = "GET") => {
  let cacheKey = JSON.stringify({ url, params, method });
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  let options = {
    method
  };
  if ("GET" === method) {
    url += "?" + new URLSearchParams(params).toString();
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
get("https://api.sightengine.com/1.0/check.json",{
  'url': 'https://sightengine.com/assets/img/examples/example7.jpg',
  'models': 'nudity,wad,offensive,text-content,gore,text',
  'api_user': '1817344764',
  'api_secret': 'uZ2h84C8TtHs3nkhrbE6',
}).then((post) => {
  document.getElementById("app").innerHTML += 'url : https://sightengine.com/assets/img/examples/example7.jpg<br>models : nudity,wad,offensive,text-content,gore,text<br>' 
  + post.status;
  console.log(post);
  console.log(post.status);
  
});
