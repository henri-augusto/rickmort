# Rick and Morty API challenge

[![EXPRESS Version][npm-expreess-version]][npm-express-url]

Application using Node.js and Express to return a static page of a list of the Rick and Morty's API.
This app is not on live, it's just for praticing.

## Challenge

In this project exist a feature than is a real challenge. And is this one

```js
characters.sort((a, b) => {
    // colocar o nomes em caixa alta para facilitar a comparação
    const x = a.name.toUpperCase();
    const y = b.name.toUpperCase();

    // organiza em ordem descrecente pelas quantida de aparições
    // após isso organiza pelo nome em ordem crescente
    return b.appereances - a.appereances || x.localeCompare(y);
```

This function, reorganize the array for descend order by the quantity of appearances and after that
reorganize by the name in ascending order.

To make the first sort, was quit easy, but the second one was a real problem, and in my researches
i found this simples solution 'localeCompare()'. Save my life!

> > >

[npm-expreess-version]: https://badgen.net/npm/v/express
[npm-express-url]: https://www.npmjs.com/package/express
