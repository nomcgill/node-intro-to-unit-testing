const expect = require('chai').expect;

const fizzBuzzer = require ('../fizzBuzzer');

describe('fizzBuzzer', function(){

    it('should return fizz-buzz if num is divisible by 15', function(){
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
      })  
    })

    it('should return buzz if num is divisible by 5', function(){
        [5, 10, 20].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        })
    })

    it('should return fizz if num is divisible by 3', function(){
        [3, 6, 9, 12].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        })
    })

    it('should return original number if not divisible by 3, 5, or 15.', function(){
        [1, 2, 4, 7].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
    });    
});

//bad case below
    it('should return an error message if input was NaN', function(){
        const badInputs = [
            'Daniel',
            'String',
            true,
            [3,5,9,10,11,15]
        ];
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        })
    })

})
