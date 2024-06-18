### Create a function called myFetch that should work as a simple version of the native `fetch()` API. The function myFetch should use the `XMLHttpRequest` to make a `GET` Request and return a promise that resolves with the request’s response and rejects with an error if any.

```js
function myFetch(){ //... your code here
}
myFetch('https://my-random-api.com/data')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
```
## Bonus points (optional)
### Make your fetch function perform other request methods like POST or receive request options.