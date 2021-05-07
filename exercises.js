(function () {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    }
    else {
      return num2;
    }
  }

  console.log(max(2, 4));
  //   // ---------------------
  //   // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  //   // ---------------------

  function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    }
    else
      if (num2 > num1 && num2 > num3) {
        return num2;
      }
      else
        if (num3 > num1 && num3 > num2) {
          return num3;
        }

  }

  console.log(maxOfThree(3, 2, 1));

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  isVowel();

  function isVowel(char) {
    'aeiou'.includes(char);
  }
  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(text) {
    let translation = '';

    text.toLowerCase().split('').forEach(function (char) {
      if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
        translation += char + 'o' + char;
      } else {
        translation += char;
      }
    });

    return translation;
  }
  rovarspraket("this is fun");
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum() {
    [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
      return accumulator + currentValue;
    }
    )
  };

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(str) {
    var output = "";
    for (let i = str.length - 1; i >= 0; i--) {
      output = output + str[i];
    }
    return output;
  }
  reverse("hello");



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(arr) {
    let length = 0;
    for (let i = 9; i < arr.length; i++) {
      if (arr[i].length > length) {
        length = arr[i].length;
      }
    }

    return length;
  }
  findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'])
  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(array, num1) {
    var output = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > num1) {
        output.push(array[i]);
      }
    }
    return output;
  }
  filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'])
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(str) {
    var frequency = {};
    for (let i = 0; i < str.length; i++) {

      if (frequency[str.charAt(i)]) {
        frequency[str.charAt(i)] += +1;
      } else {
        frequency[str.charAt(i)] = 1;
      }
    }
    return frequency;
  }
  charFreq("abbabcbdbabdbdbabababcbcbab");


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR function maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR function maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  // console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  // console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  // console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  // console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
});