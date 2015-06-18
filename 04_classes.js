macro class {
  rule {
    $className {
      constructor $cparams $cbody
      $($mname $mparams $mbody) ...
    }
  } => {
    function $className $cparams $cbody

    $($className.prototype.$mname
      = function $mname $mparams $mbody; ) ...
  }
  rule {
    $className extends $parentClass {
      constructor $cparams $cbody
      $($mname $mparams $mbody) ...
    }
  } => {
    function $className $cparams $cbody

    $className.prototype = Object.create($parentClass.prototype);

    $($className.prototype.$mname
      = function $mname $mparams $mbody; ) ...
  }
}


class Animal {
  constructor(name) {
    this.name = name;
  }
  say(msg) {
    console.log(this.name + " says: " + msg);
  }
}

class Dog extends Animal {
  constructor(name) {
    this.name = name;
  }
  say(msg) {
    console.log(this.name + " says: Bark bark: " + msg);
  }
}
