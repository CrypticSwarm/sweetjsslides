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
}

until (false) {
  console.log("Hello");
}
