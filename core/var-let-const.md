# Difference between var, let and const
This doc is based on ES6 and suitable for ES9 (2020) as well.

## `var`

### Scope `var`

* Global scoped or Locally/Function Scoped

```javascript
var name = "John Doe"
function changeName(){
    name = "Javascript"
    var new_name = "Javascript"
}
console.log(name) //prints John Doe
changeName()
console.log(name) //prints Javascipt
console.log(new_name) //ReferenceError since locally scoped
```
* Does not reinitialize variable from global scope if redeclared

    This might lead to confusion that you have set up and reassingned new value

```javascript
var name = "John Doe"
function changeName(){
    var name = "Javascript"
}
console.log(name) //prints John Doe
changeName()
console.log(name) //prints John Doe
```

### Hoisting of `var`

Variables and functions defined are hoisted to the top of their scope and then code is executed

```javascript
console.log(name) // not gives error, prints undefined
var name = "John Doe"
```
equivalent to
```javascript
var name;
console.log(name) //prints undefined
name = "John Doe"
```

## `let`
### Scope of `let`

Follows same scope features as that of `var`.

Additionally it is **blocked** scoped.

```javascript
var firstName = "John"
let lastName = "Doe"

if (true){
    var firstName = "Tim"
    let lastName = "Bar"
}
console.log(firstName) // Tim
console.log(lastName) // Doe
```

`let` is blocked scoped so it did not redeclaring in `if` block and did not changed global variable's value

### Hoisting of `let`
Like `var`, `let` is hoisted to the top but not intialized with `undefined`
```javascript
console.log(name) // gives ReferenceError
let name = "John Doe"
```

## `const`
### Scope of `const`
* Scope of `const` is same as that of `let`
* `const` variables cannot be updated or redeclared

So if we declare the const variable it cannot
do this
```javascript
const name = "John"
name = "Tim" //TypeError: Assignment to constant variable
```
nor this
```javascript
const name = "John"
const name = "Tim" //Identifier 'name' has already been declared
```

### Hoisting of `const`
Same as `let`, `const` variables are also hoisted top but are not initialized. Will get ReferenceError if accessed before declaration