macro until {
  rule {
    ($cond) { $x ... }
  } => {
    while (!($cond)) { $x ... }
  }

  rule {
    ($cond)  $x:expr
  } => {
    while (!($cond)) { $x }
  }

  case {
    $name $x
  } => {
    throwSyntaxError("Until must be in the form of `until($condition) $body` \n Which almost the same as a while loop");
  }
}

until function (a) {
  console.log("Hello");
}
