macro parseclass {
  rule {
    $x:lit
  } => {
    "Literal"
  }

  rule {
    $x:ident
  } => {
    "Identifier"
  }

  rule {
    $x:expr
  } => {
    "Expression"
  }
}

parseclass "hello";

parseclass x;

parseclass x + 1;

parseclass (x + 1);
