var assert = require('assert');
var mainApp = require('../app');

describe('Main app', function () {
    describe('#numberOfEvens', function () {
        it('should return message "The input is not an array." when the input param is not an array', function () {
            assert.equal("The input is not an array.", mainApp.numberOfEvens(1));
        });
    });
});

describe('Main app', function () {
    describe('#numberOfEvens', function () {
        it('should not count characters as even numbers', function () {
            assert.equal(0, mainApp.numberOfEvens(['a', 1, 'bcd']));
        });
    });
});

describe('Main app', function () {
    describe('#numberOfEvens', function () {
        it('should run normally with big numbers', function () {
            assert.equal(2, mainApp.numberOfEvens([1000000000000000000000000000000000000000000000000000000, 1, 999999999999999999999999999999999992]));
        });
    });
});