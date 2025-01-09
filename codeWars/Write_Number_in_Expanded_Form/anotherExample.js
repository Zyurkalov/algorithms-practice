// заменил reduce на map
function expandedForm(num) {
    const arr = num.toString().split("");
    const lastIndex = arr.length - 1;

    return arr
        .map((n, i) => (n !== "0" ? n + "0".repeat(lastIndex - i) : ""))
        .filter((n) => n !== "") //или можно .filter(Boolean) так как "" вернет false
        .join(" + ");
}

// или можно решить так
function expandedForm(num) {

    const arr = num.toString().split('');
    const result = [];
  
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '0') {
        result.push(arr[i] + '0'.repeat(arr.length - 1 - i));
      }
    }
  
    return result.join(' + ');
  }

