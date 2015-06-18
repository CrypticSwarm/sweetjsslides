let typeof = macro {
  rule {
    $a
  } => {
    ($a === null ? 'null' : typeof $a)
  }
}

typeof x === 'null'
