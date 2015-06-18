macro aif {
  case {
    $aif_name ($cond ...) {$body ...}
  } => {
    // make a new `it` identifier using the lexical context
    // from `$aif_name`
    var it = makeIdent("it", #{$aif_name});
    letstx $it = [it];
    return #{ 
      // create an IIFE that binds `$cond` to `$it`
      (function ($it) {
        if ($cond ...) {
          // all `it` identifiers in `$body` will now
          // be bound to `$it` 
          $body ...
        }
      })($cond ...);
    }
  }
}

aif (foo()) {
  console.log(it);
}
