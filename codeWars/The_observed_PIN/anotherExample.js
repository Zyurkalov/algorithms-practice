// function getPINs(observed) {
//     return observed.split('')
//     .map( t => ({
//           '0': [ '0', '8' ],
//       '1': [ '1', '2', '4' ],
//       '2': [ '1', '2', '3', '5' ],
//       '3': [ '2', '3', '6' ],
//       '4': [ '1', '4', '5', '7' ],
//       '5': [ '2', '4', '5', '6', '8' ],
//       '6': [ '3', '5', '6', '9' ],
//       '7': [ '4', '7', '8' ],
//       '8': [ '5', '7', '8', '9', '0' ],
//       '9': [ '6', '8', '9' ]
//     }[t]))
//     .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
//   }

//максимально похожее на мое решение
function Keypad(idx) {
    this.board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [undefined, 0, undefined],
    ];
    
    this.adj = function(idx) {
      idx = idx == 0 ? 10 : idx - 1;
      var r = parseInt(idx / 3), c = idx % 3;
      return [
        (this.board[r]   || [])[c], 
        (this.board[r-1] || [])[c],   (this.board[r+1] || [])[c],
        (this.board[r]   || [])[c-1], (this.board[r]   || [])[c+1]
      ].filter(function(v) { return v !== undefined; });
      
    }
  }
  
  function cart_prod(X, Y) {
    var out = [];
    for (var i in X) for (var j in Y) out.push(
      [].concat.apply([], [X[i], Y[j]])
    );
    return out;                     
  }
  
  function getPINs(observed) {
    var k = new Keypad();
    return observed.split('').map(function(pressed) {
      return k.adj(+pressed);
    }).reduce(function(acc, val) {
      return cart_prod(acc, val);
    }).map(function(a) {
      return a instanceof Array ? a.join('') : '' + a;
    }).sort();
  }