# String interpolation
Replaces the marked parts of a text with values from a given set, similar to a templating engine, but less robust.

## Installation
```
npm install --save interpolate-string
```

## Usage
```js
const interpolate = require("interpolate-string");

const text = "Hello {{ name.first }}!";
const data = { name: { first: "John", last: "Doe" }};

const result = interpolate(text, data);

console.log(result); // Hello John!
```

Alternatively you can also specify a pattern for the replacement format:

```js
const interpolate = require("interpolate-string");

const text = "Hello ${name.first}!";
const pattern = /\$\{(.+?)\}/g;
const data = { name: { first: "John", last: "Doe" }};

const result = interpolate(text, data, pattern);

console.log(result); // Hello John!
```
