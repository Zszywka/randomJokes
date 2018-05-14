var url = 'https://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var object = new XMLHttpRequest();
  object.open('GET', url);
  object.addEventListener('load', function() {
    var response = JSON.parse(object.response);
    paragraph.innerHTML = response.value.joke;
  });
  object.send();
}
// the first time you entered the site you did not have to press the download button and it was already a joke
$('p').text(getJoke());
