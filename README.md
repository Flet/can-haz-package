# can-haz-package

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/can-haz-package.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/can-haz-package
[travis-image]: https://img.shields.io/travis/Flet/can-haz-package.svg?style=flat-square
[travis-url]: https://travis-ci.org/Flet/can-haz-package

Check if an npm pacakge name is valid and does not exist.

uses [validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name) to check naming rules and uses `npm view` (via [shelljs](https://www.npmjs.com/package/shelljs)) to check if the package exists.

This package will not work in the browser, sorry!

## Install

```
npm install can-haz-package
```

## Usage

```js
var canHazPackage = require('can-haz-package')

canHazPackage('this-should-never-be-taken-omg-whaaaat-999')
// reurns true

canHazPackage('standard')
// returns 'Sorry, that package name is taken! :('

canHazPackage(' ¯\_(ツ)_/¯ ')
// returns 'Package name does not conform to naming rules.'

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
