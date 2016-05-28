function foo(){
  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}

console.log(foo());

// What will the above log (and why)?
// return 8 becasue both function are function declaration and they get hoisted to the top  
