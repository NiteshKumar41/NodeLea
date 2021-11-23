const url = require('url');

const myUrl  = new URL('http://mywebsite.com/hello.html?id=300&status=active');

//serialze url
console.log(myUrl.href);

//host (root domain)
console.log(myUrl.host);

//hostName (does not get port number)
console.log(myUrl.hostname);

// pathname

console.log(myUrl.pathname);

// serialized query

console.log(myUrl.search);

//params object

console.log(myUrl.searchParams);
//add params

myUrl.searchParams.append('abc','124');
console.log(myUrl.searchParams);

//loop through params

myUrl.searchParams.forEach((value,name)=> console.log(`${name}:${value}`))