

let numbers = [1,2,3,4,5,6,7]
let names = ["quynh", "viet", "linh","hieu"]
let checks = [true,true,false,true,false,false]

numbers[3]

console.log(numbers.length)
console.log(names.length)
console.log(checks.length)

numbers.push(8)
numbers.push(9)

numbers.pop()

names.unshift('Hoa')
names.shift()

console.log("Index of values"names.indexOf('linh'))

for (let index = 0; indexx < names.length; index++) {
    console.log(names[index]);
}

for(let item of check) {
    console.log(item)
}