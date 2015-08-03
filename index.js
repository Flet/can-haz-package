module.exports = canHazPackage

var exec = require('shelljs').exec
var validateName = require('validate-npm-package-name')

function canHazPackage (name) {
  var valid = validateName(name).validForNewPackages
  if (!valid) return 'Package name does not conform to naming rules.'

  var view = exec('npm -loglevel silent view ' + name, {silent: true})

  if (view.code !== 1) return 'Sorry, that package name is taken! :('

  return true
}
