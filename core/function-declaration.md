# Different ways function declarations
And what is each signify

Note: Documented as per ES6 applicable in ES9 as well

## Simple Declaration
```javascript
function functionName(params){
    //your code goes here
}
```
Nothing special about it. Classic way to implement functions

### Hoisting
Functions declarations move to the top of scope when code is executed.
```javascript
add(1, 2) //outputs 3

function add(a, b){
    return a + b
}
```

## Expression Declaration

Functions are assigned to variables

```javascript
var addValues = function(a, b) {
    return a + b
}

addValues(2,3) //output - 5
```

These functions are called **anonymous** function, functions without name

### Hoisting
Hoisting of expression functions are equivalent to those of type of decalartion variable.

For more info on hoisting of varaibles visit [var-let-const](./var-let-const.md)

```javascript
console.log(addValues)// prints undefined, same as hoisting var variables
addValues(2,3) // Raises TypeError: not a function since variable is undefined

var addValues = function(a, b) {
    return a + b
}

addValues(2, 3)// return 5
```

## Arrow Declarations
```javascript
const addValues = (a, b) => a + b
addValues(2,3) // 5
```
Can be declared without `brackets` and `return`.

Recommended to be assigned to `const` variables since function expression is always constant

Does not have `this`. Do not use it for object methods

```javascript
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height;    
    }
}

var rect = new Rectangle(2, 3)
console.log(rect.area()) //output 6

rect.perimeter = () => {return 2*(this.width + this.height)} //returns Nan, since no reference to object (this)
//use below one
rect.perimeter = function() {return 2*(this.width + this.height)}
// returns perimeter of rectangle

console.log(rect.perimeter())
```

### Hoisting
Hoisting for Arrow functions behave same as expression functions, that is, the hoisting of variables