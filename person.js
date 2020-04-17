class person{
    constructor(name, age, gender, interests){
        this.name = name
        this.age = age  
        this.gender = gender
        this.interests  = interests
     } 

     Hello(){
         console.log('Hello, my name is' + ' ' + [this.name] + ' ' + 'and I am' + ' ' + ' ' + [this.age] + ' ' + 'years old. My interest are' + [this.interests])
        
    }

    
}



let person1 = new person('Nokukhanya',29,'female',['creating things ','web design', 'business'] )
let greeting = person1.Hello()
console.log(greeting)



