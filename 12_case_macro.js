macro case_example {
  case {
    $name $x
  } => {
    return #{ $x }
  }
}

case_example "ABC"
