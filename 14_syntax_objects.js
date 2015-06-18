macro discard {
  case { _ $forgotten } => {
    var literal = makeValue("SWEET!", #{$forgotten});
    return [literal]
  }
}

discard 123
