# laravel-mix-environments
> Adds mix.inDevelopment() & mix.inTest() to [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).

## Introduction
**laravel-mix-environments** is a simple plugin that extends **laravel-mix** with 2 additional methods.

* `mix.inDevelopment()` returns true when `NODE_ENV` is set to `development`.
* `mix.inTest()` returns true when `NODE_ENV` is set to `test`.

## Usage
Inside your `webpack.mix.js` file, import **laravel-mix-environments** after importing **laravel-mix** and start using them.

```js
const mix = require('laravel-mix');
const mixEnvironments = require('laravel-mix-environments');

if (mix.inDevelopment()) {
    // Add webpack configs for development environment here.
}

if (mix.inTest()) {
    // Add webpack configs for test environment here.
}
```

## License
**[laravel-mix-environments](https://github.com/yansern/laravel-mix-environments)** by [Yan Sern](https://twitter.com/yansernio). This is an open source project released under the [MIT License](LICENSE).

> PS: I would love to know if you're using laravel-mix-environments. Tweet to me at [@yansernio](https://twitter.com/yansernio).
