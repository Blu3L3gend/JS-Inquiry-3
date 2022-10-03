function exercise(x) {
  return function () {
    return `Today's exercise: ${x}`;
  };
}
var run = exercise("running");
console.log(run());

function exercise(y) {
  return function () {
    return `Today's exercise: ${y}`;
  };
}
var swim = exercise("swimming");
console.log(swim());
