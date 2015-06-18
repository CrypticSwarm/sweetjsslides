
function typeOf(a) { 
  return a === null ? 'null' : typeof a;
}

operator typeof 14 { $value } => #{ typeOf($a) }

typeof a;
