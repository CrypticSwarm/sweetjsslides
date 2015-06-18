macro unless {
  rule {
    ($cond:expr) { $x ... }
  } => {
    if (!($cond)) { $x ... }
  }

  rule {
    ($cond)  $x:expr
  } => {
    if (!($cond)) { $x }
  }
}

var someCondition = true;
unless (someCondition) {
  console.log("Hello");
}

