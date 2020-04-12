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

// rect.perimeter = () => {return 2*(this.width + this.height)}
rect.perimeter = function() {return 2*(this.width + this.height)}

console.log(rect.perimeter())