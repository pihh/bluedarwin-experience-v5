'use strict';

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

require('core-js/modules/es7.symbol.async-iterator');

require('core-js/modules/es6.symbol');

require('core-js/modules/web.dom.iterable');

require('core-js/modules/es6.array.iterator');

require('core-js/modules/es6.object.to-string');

require('core-js/modules/es6.string.iterator');

require('core-js/modules/es6.weak-map');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Api = exports.Iframe = void 0;

var wc = _interopRequireWildcard(
  require('@webcomponents/webcomponentsjs/webcomponents-loader.js')
);

var iframe = _interopRequireWildcard(require('./libs/iframe'));

var api = _interopRequireWildcard(require('./libs/api'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

// import "whatwg-fetch";
var Iframe = iframe.default;
exports.Iframe = Iframe;
var Api = api.default;
exports.Api = Api;
