const imgHTML = document.querySelector('img');
const url = 'https://lostaszic.pl/zastepstwa/zastepstwa.jpg';
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'https://filip343.github.io/zasJsProj/');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST', 'OPTIONS');

headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

console.log(fetch(url,{credentials: 'include',
      method: 'GET',
      headers: headers}));
