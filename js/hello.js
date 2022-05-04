// alert("Hello World!")
function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}


let img = document.querySelector("img");

img.addEventListener("img" , display_image('G:/Drive partagés/PIERRE/02-FMJ/EMPLOI/ADA/EXOS/projets/greenteammouse/images/cochon.jpg', 276, 250, 'JavaScriptImage'));
//console.log(img);

//document.body.appendChild(img);
