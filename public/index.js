var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
}

var beers;

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
}

var createImg = function(imgUrl) {
  var img = document.createElement("img");
  img.width = 100;
  img.src = imgUrl;
  return img;
}

var createName = function(passedName) {
  var name = document.createElement("p");
  name.innerText = "Name: " + passedName;
  return name;
}

var createImg = function(imgUrl) {
  var img = document.createElement("img");
  img.width = 100;
  img.src = imgUrl;
  return img;
}

var appendElements = function(name, img, li, ul) {
  li.appendChild(name);
  li.appendChild(img);
  ul.appendChild(li);
}

var createBeer = function(beer) {
  var ul = document.querySelector('#beer-list');
  var li = document.createElement('li');
  var name = createName(beer.name);
  var img = createImg(beer.image_url);
  
  appendElements(name, img, li, ul);
}

var populateList = function(beers) {
  beers.forEach(createBeer);
}

var app = function () {
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
