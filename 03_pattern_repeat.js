macro list {

  rule {
    ( $x (,) ... )
  } => {
    [$x (,) ...]
  }

  rule {
    ( $x ... )
  } => {
    [$x (,) ...]
  }

}

var x = list(1, 2, 3, 4);
var y = list(1 2 3 4);

