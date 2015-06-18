macro sweet_join {
  case { _ $a $b } => {
    var literal = makeValue(" SWEET ", #{$forgotten});
    letstx $literal = [literal];
    return #{ $a + $literal + $b }
  }
}

sweet_join "This is" "JS"

