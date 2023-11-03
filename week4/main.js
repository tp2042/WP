var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://tp2042.github.io/WP/week4/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData);
};
ourRequest.send();