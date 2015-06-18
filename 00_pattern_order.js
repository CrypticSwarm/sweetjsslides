macro Foo {
  rule { $x } => { "Hello" }
  rule { ($x) } => { "Goodbye" }
}

Foo "A"
Foo (1)
