class person{
    constructor(name, age, gender, interests){
        this.name = name
        this.age = age  
        this.gender = gender
        this.interests  = interests
     } 

     Hello(){
         return('Hello, my name is ' + [this.name] + ' and I am ' +  [this.age] + ' years old. My interest are ' + [this.interests]);
        
    }

    
}



let person1 = new person('Ryan',30,'male','being a hardarse',' agile',' ssd hard drives')
let greeting = person1.Hello()
//console.log(greeting)

module.exports = {greeting, person}

