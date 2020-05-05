const {greeting, Person} = require ('../src/person');

let  person = new Person('Ryan',30,'male',['being a hardarse',' agile', ' ssd hard drives']);

describe ("person", function(){
    it('should input the person name',function(){
       expect(person.name).toBe('Ryan');
     })
     it('should input the person age',function(){
        expect(person.age).toBe(30);
     })
     it('should input the person interests',function(){
    expect(person.interests).toEqual(['being a hardarse',' agile',' ssd hard drives']);
     })
})

describe ("Hello", function(){
    it('should add  greeting to person',function(){
        const greeting = person.Hello()
expect(person.Hello()).toBe('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives');
    })
})