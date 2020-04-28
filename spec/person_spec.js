const {greeting, person} = require ('../src/person');

describe ("person", function(){
    it('should input the person name',function(){
 const  Ryan = new person('Ryan',30,'male',['being a hardarse',' agile',' ssd hard drives']);
    expect(Ryan.name).toBe('Ryan');
   
     })
     it('should input the person age',function(){
        const  Ryan = new person('Ryan',30,'male',['being a hardarse',' agile',' ssd hard drives']);
        expect(Ryan.age).toBe(30);
     })
     it('should input the person interests',function(){
        const  Ryan = new person('Ryan',30,'male','being a hardarse',' agile',' ssd hard drives');
    expect(Ryan.interests).toBe('being a hardarse',' agile',' ssd hard drives');
     })
})
describe ("Hello", function(){
    it('should add  greeting to person',function(){
        const greeting = person.hello
expect(person.hello).toBe()
    })
})