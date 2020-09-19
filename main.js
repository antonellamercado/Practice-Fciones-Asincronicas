const contenedor = document.getElementById("contenedor");


function renderImage(url) {
    var imgY = document.createElement("img");
    imgY.src = url;
    contenedor.appendChild(imgY);

}

fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderImage(data[0].url);
    })