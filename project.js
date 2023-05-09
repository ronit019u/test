function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator =  {
     add: (a, b) => a + b,
     subtract: (a, b) => a - b,
     multiply: (a, b) => a * b,
     divide: (a, b) => a / b,
    
  }

  function caesarCipher(str, n) {
     const charCodes = [];
     for(let i = 0; i < str.length; i++) {
       const char = str[i];
       const code = str.charCodeAt(i);
       if(char.match(/[a-z]/i)) {
        if(code >=  65 && code <= 90) { 
        charCodes.push((code - 65 + n) % 26 + 65);
       } else if(code >= 97 && code <= 122) {
        charCodes.push((code - 97 + n) % 26 + 97);
       }
    }
       else {
        charCodes.push(code);
       }
     }
     return String.fromCharCode(...charCodes);
     
  }

  function analyzeArray(arr) {
    const average= arr.reduce((a, b) => a + b) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
     return{average, min, max, length}
  }


module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
