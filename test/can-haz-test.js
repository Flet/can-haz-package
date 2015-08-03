var test = require('tape')

var canHazPackage = require('../')

test('Valid Package Name that is available', function (t) {
  t.plan(1)
  t.equals(canHazPackage('thisshouldneverbetakenomgwhaaaat999'), true)
})

test('Valid Package Name that is not available', function (t) {
  t.plan(1)
  t.equals('Sorry, that package name is taken! :(', canHazPackage('standard'))
})

test('Invalid Package Name', function (t) {
  t.plan(1)
  t.equals('Package name does not conform to naming rules.', canHazPackage(' ¯\_(ツ)_/¯ '))
})
