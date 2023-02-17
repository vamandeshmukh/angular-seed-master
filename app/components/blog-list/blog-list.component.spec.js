
// Unit testing frameworks / libraries 
// Java -       JUnit
// JavaScript -  jasmine, jest, next, enzyme  
// test runner - karma 


describe('testing the methods in the math class', () => {

    // testing config

    beforeAll(() => {
        console.log('testing started...');
    });

    afterAll(() => {
        console.log('testing ended.');
    });

    beforeEach(() => {
        console.log('test case started...');
    });

    afterEach(() => {
        console.log('test case ended.');
    });

    // test cases

    // positive test case 
    it('verify a math operation', () => {
        // expect(5 + 5).toBe(10);
        expect(2 + 2).toBeCloseTo(4);
    });

    // negative test case 
    it('verify a math operation', () => {
        expect(5 + 6).not.toBe(10);
    });

    // test case 
    it('going to fail', () => {
        expect(5 + 5).toBe(5);
    });

});





