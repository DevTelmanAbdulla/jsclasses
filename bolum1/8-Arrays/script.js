
let names = ['Scarlet Johanson','Megan Fox','Morgan Freeman']
// console.log(names[1])

//we able modify names since used let before it
// names[1] = "Morgan";
// console.log(names[1])

//Let's create array contains numbers only
let ages = [18,3,25,32]
// console.log(ages[3]);

//Let's create array contains numbers and strings
let random = ['Fox Megan','Morgan Freemaa',10, 20]
// console.log(random)

// console.log(random.length);

//Let's names with dash
// let dash= names.join('-');
// console.log(dash)

//Let's name with comma
// let dash= names.join(',');
// console.log(dash)

// Let's get element index
// let queue = names.indexOf("Morgan");
// console.log(queue);

//concat method is used for adding element to the list but won't return value once you printed the list
// let add = names.concat(["Emmy Rossum","Laura Vandervoort"]);
// console.log(names)

//concat method is used for adding element to the list will return value once you printed the value
// let add = names.concat(["Emmy Rossum","Laura Vandervoort"]);
// console.log(add)

//Push method is used for adding a element to the list
let elementAdd = names.push("Sydney Sweeney");
// console.log(names);

//Pop method is used for removing the last element from the list
names.pop();
console.log(names);
