macro repeater {
  rule {
    ( $x ... )
  } => {
    (function () { $x ... }());
  }
}

repeater (
  var x = 1;
  var y = [1, 2, 3];
)
