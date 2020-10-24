/*

Below two methods will change the scope where the function is executed and also will execute the function
.apply()
.call()

.bind() will also change the scope, but will not execute the function

Implement Function.prototype.bind()

const foo = function() {
  console.log(this.bar);
}

let baz = foo.bind({bar: 'hello'})

baz(); // hello

*/

Function.prototype.bind123 = function (context) {
  // we're assigning this to const fn here because if we reference 'this' inside returned function,
  // then  'this' will refer to that anonymous function
  const fn = this;
  return function () {
    fn.call(context);
  };
};
