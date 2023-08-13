let container = document.querySelector('div.container');

fetch('https://jsonplaceholder.typicode.com/photos')
.then(function(response){
  return response.json();
})
.then(function(data){
  for (let i = 0; i < 10; i++){
    let divItem = document.createElement("div");
    divItem.className = "item";
    divItem.innerHTML =
    `<p class="id">${data[i].id}</p>
    <h1 class="title">${data[i].title}</h1>
    <img src="${data[i].thumbnailUrl}" />
    `;
    container.appendChild(divItem);
  }
})