data = ([
    { name: "joe", age: 30, hobby: "hiking" },
    { name: "betty", age: 20, hobby: "walking dogs" },
    { name: "ivy", age: 5, hobby: "growing" },
    { name: "christina", age: 20, hobby: "coding" }
])

console.log(data)

// GIVEN AN ARRAY OF OBJECTS. sort by attribute

// 1. create a function using Array.sort() 
// method accepts the callback function as its first argument and returns the sorted array
// 2. define two variables by specifying which attribute to sort
// 3. if hoppy a should be placed for hobby b
// 4. hobby b should be placed before hobby a
// 5. return new list
// 6. log data

data.sort((a, b) => {
    let hobbyA = a.hobby.toUpperCase()
    let hobbyB = b.hobby.toUpperCase()
// if , else if, else
     // return -1, 1, 0 == 0
    if (hobbyA < hobbyB) {
        return -1
    } else if (hobbyA > hobbyB) {
        return 1
    } else {
        return 0
    }
});

console.log( data )









// Model.find().sort([['hobby', -1]])

















// data.sort((a, b) => {
//     let hobbyA = a.hobby.toUpperCase();
//     let hobbyB = b.hobby.toUpperCase();
//     if (hobbyA < hobbyB) {
//         return -1; // hobbyA is placed before hobbyB
//     } else if (hobbyA > hobbyB) {
//         return 1; // hobbyB is placed before hobbyA
//     } else {
//         return 0; // names must be equal
//     }
    
// });

// console.log(data)
