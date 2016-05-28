var foo = 1;

function bar() {
	//foo is undefined, because that is actually get defined and this is waiting till var = 10 to assign a value
	// this is already in another scope

	console.log(foo)
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}

bar();  
// What will the above log (and why)?
