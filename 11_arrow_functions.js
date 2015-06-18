macro (=>) {
  rule infix {
    ($params ...) | { $body ... }
  } => {
    function ($params ...) { $body ... }
  }

  rule infix {
    $param:ident | $body:expr
  } => {
    function ($param) { return $body }
  }

  rule infix {
    ($params ...) | $body:expr
  } => {
    function ($params ...) { return $body }
  }
}

var arr = [1,2,3];

arr.reduce((x, y) => { 
  var sum = x + y;
  return sum * 2;
});

arr.reduce((x, y) => x + y );
arr.map(x =>  x + 1 );
