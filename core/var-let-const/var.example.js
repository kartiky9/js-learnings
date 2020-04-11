var name = "John Doe"

function changeName(){
    var new_name = "Javascript"
    console.log(new_name)
}

changeName()
console.log(name)
// console.log(new_name)

console.log(hoist_this_var) //will print undefined due to hoisting
var hoist_this_var = 'Hoisted'