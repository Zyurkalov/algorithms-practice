function rot13(str) {
    return str.split('').map((e)=>{
      if(!e.match(/[a-z]/i)) {
        return e;
      }
      const shift = e === e.toLowerCase() ? 97 : 65;
      return String.fromCharCode((e.charCodeAt(0) - shift + 13) % 26 + shift)
    }).join('')
  }

// лучшее решение
function rot13(str) {
    return str.replace(/[a-z]/gi, function (x) {
      return String.fromCharCode(
        x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13)
      );
    });
}

function rot13(str) {
    let inStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let outStr = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    return str.replace(/[a-z]/gi, symb => outStr[inStr.indexOf(symb)]);
  }