const productOfNumber = (a,b) =>{
    return (a*b);
}

console.log(productOfNumber(7,8))

let student = {
    name : "karan",
    age : 23,
    course:"CSE",
    getInfo(){
        console.log(`Student Name is ${this.name}`)
    }
}
student.getInfo()