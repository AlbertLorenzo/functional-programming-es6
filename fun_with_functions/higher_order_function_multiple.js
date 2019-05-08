const multiple = (x) => (y) => y % x === 0

const isMultiple = multiple(3)

console.log(isMultiple(21))