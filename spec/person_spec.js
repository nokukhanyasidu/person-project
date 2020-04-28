const {oopFunction, Person} = require ('../src/person');

test ('Test oop', () => {
    const Ryan = new Person('Ryan', 30)
    expect(Ryan.name).toBe('Ryan')
    expect(Ryan.age).toBe('30')
})