var trivialAdd = function(x, y) {
  return x + y;
};

// Create the function `curriedAdd` such that it will exhibit the following behavior:
var curriedAdd = function(a) {
	return function(b){
		return a+b
	}
};
console.log(curriedAdd(2)(2)); // 4
console.log(curriedAdd(4)(6)); // 10

// Create the funciton `curriedAddInfinite` such that it will exhibit the following behavior:
// curriedAddInfinite(2)(2)(); // 4
// curriedAddInfinite(1)(2)(3)(4)(); // 10
var curriedAddInfinite = function(a) {
	sum = a; 
	var inner = function(b){
		if (b !== undefined){
			sum += b; 
			return inner;  
		}else{
			return sum 
		}
	}
	return inner; 
};

console.log(curriedAddInfinite(2)(2)()); // 4
console.log(curriedAddInfinite(1)(2)(3)(4)()); // 10
// What language features do you use to achieve the above? recursion 

// extra notes from Edmund curried add without the last  parentheses ()

var add = function (a) {
  var sum = a;
  var inner = function (b) {
    sum += b;
  	console.log("inner" + inner);
	return inner;
    // when it is last time, return sum
  };
  inner.valueOf = function () {
  	console.log("sum" + sum)
    return sum;
  };
  console.log("outter" + inner);
  return inner;
};

console.log(add(3)(4)(10));