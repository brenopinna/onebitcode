"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// npm i -D @babel/core @babel/cli @babel/preset-env

/*
  Instalei essas três dependências de desenvolvimento, sendo:
  @babel/core: núcleo do babel, ele que compila o código.
  @babel/cli: Ferramenta para interagir com o babel core na linha de comando.
  @babel/preset-env: configuração padrão para o babel
*/
// npx babel index.js => retorna no terminal o código com pequenas correções
// npx babel index.js --out-file dist.js => Cria um arquivo dist.js com as modificações do babel.
/*
  npx babel index.js --out-file dist.js --presets=@babel/preset-env:
  cria o arquivo dist.js com as modificações do babel, seguindo o preset-env.
*/
// npx babel [arquivo a converter] --out-file [arquivo convertido] --presets=[presets separados por virgula]
// npx babel [diretorio a converter] --out-dir [diretorio convertido] --presets=[presets separados por virgula]

var mean = function mean() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0) / numbers.length;
};
console.log(mean(2, 6, 3, 7, 4) + " = 4.4");
var weightedMean = function weightedMean() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  return mean.apply(void 0, _toConsumableArray(entries.reduce(function (acc, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    for (var i = 0; i < (weight !== null && weight !== void 0 ? weight : 1); i++) acc.push(number);
    return acc;
  }, [])));
};
console.log(weightedMean({
  number: 7,
  weight: 2
}, {
  number: 9,
  weight: 5
}, {
  number: 3
}) + " = 7.75");
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var medianIndex = [];
  medianIndex.push(Math.floor(numbers.length / 2));
  if (!(numbers.length % 2)) medianIndex.push(medianIndex[0] - 1);
  return mean.apply(void 0, _toConsumableArray(medianIndex.map(function (index) {
    return numbers.sort(function (a, b) {
      return a - b;
    })[index];
  })));
};
console.log(median(4, 5, 2, 7, 42, 99) + " = 6");
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var count = numbers.reduce(function (acc, value) {
    acc[value] = acc[value] ? ++acc[value] : 1;
    return acc;
  }, {});
  var modeNumber = Object.entries(count).reduce(function (acc, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      number = _ref3[0],
      count = _ref3[1];
    if (count > acc.biggestCount) {
      acc.numbers = [Number(number)];
      acc.biggestCount = count;
    } else if (count === acc.biggestCount) {
      acc.numbers.push(Number(number));
    }
    return acc;
  }, {
    biggestCount: 0,
    numbers: []
  });
  return modeNumber.numbers;
};
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) + " = 4");