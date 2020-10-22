"use strict";

var MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  var arr = [];
  var str = '';

  for (var i = 0; i < expr.length; i++) {
    str += expr[i];

    if (str.length == 10) {
      str = str.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
      arr.push(str);
      str = '';
    }
  }

  return arr.map(function (elem) {
    if (elem[0] != '*') {
      return MORSE_TABLE[elem];
    } else {
      return ' ';
    }
  }).join('');
}

module.exports = {
  decode: decode
};