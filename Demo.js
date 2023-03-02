// const productOfNumber = (a,b) =>{
//     return (a*b);
// }

// console.log(productOfNumber(7,8))

// let student = {
//     name : "karan",
//     age : 23,
//     course:"CSE",
//     getInfo(){
//         console.log(`Student Name is ${this.name}`)
//     }
// }
// student.getInfo()


// const fruits =['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'] 
// const newArray = fruits.map( (fruit) =>{
//         if (fruit === ' '){
//             return 'empty string'
//         }
//         else{
//             return fruit
//         }
// })
// console.log(newArray)


// Spread Operator

// const newFruits = [...fruits,"tomato"]
// console.log(newFruits)

// Rest Opertor

// const myFunc  =(...n) =>{
//     return n
// }
// console.log(myFunc(1,2,3,4,5,6))

// Destructuring -----------------------------------------------

// Array Destructuring

const fruits =['apple', 'oranges' , 'tomato ', 'mango', 'pineapple ' , 'lemon'] 

const [fruit1,fruit2,,fruit3] = fruits
console.log(fruit1,fruit2,fruit3)

// Object Destructuring

const student = {
    name : "karan",
    age : 23,
    course:"CSE",
    getInfo(){
        console.log(`Student Name is ${this.name}`)
    }
}

const {name,course} = student
console.log(name,course)




