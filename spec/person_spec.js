const {greeting, Person} = require ('../src/person');

let  Ryan = new Person('Ryan',30,'male','being a hardarse',' agile',' ssd hard drives');

describe ("person", function(){
    it('should input the person name',function(){
       expect(Ryan.name).toBe('Ryan');
     })
     it('should input the person age',function(){
        expect(Ryan.age).toBe(30);
     })
     it('should input the person interests',function(){
    expect(Ryan.interests).toBe('being a hardarse',' agile',' ssd hard drives');
     })
})

describe ("Hello", function(){
    it('should add  greeting to person',function(){
        const greeting = Person.hello
expect(Person.hello).toBe()
    })
})