
var argv = process.argv;

var sum = 0;
for (key in argv) {
  if (key >= 2) {
    sum += Number(argv[key]);
  }
}

console.log(sum);