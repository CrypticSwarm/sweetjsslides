let typeof = macro {
  rule {
    $a
  } => {
    ($a === null ? 'null' : typeof $a)
  }
}


typeof (x++) === 'null'

// Bad since x++ is subject to multiple evaluations
