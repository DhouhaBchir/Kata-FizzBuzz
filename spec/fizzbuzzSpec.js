var FizzBuzz= require('../app/FizzBuzz');

describe("fizz buzz test", function() {

    let fizzBuzz = new FizzBuzz();

    it("should_return_input_when_given_non_multiple_of_3_or_5", function() {
        expect(fizzBuzz.execute(1)).toEqual("1");
        expect(fizzBuzz.execute(2)).toEqual("2");
        expect(fizzBuzz.execute(4)).toEqual("4");
    });

    it("should_return_fizz_when_given_multiple_of_3", function() {
        expect(fizzBuzz.execute(3)).toEqual("fizz");
        expect(fizzBuzz.execute(6)).toEqual("fizz");
        expect(fizzBuzz.execute(9)).toEqual("fizz");
    });

    it("should_return_buzz_when_given_5", function() {
        expect(fizzBuzz.execute(5)).toEqual("buzz");
        expect(fizzBuzz.execute(20)).toEqual("buzz");
    });

    it("should_return_fizzbuzz_when_given_multiple_of_3_and_5", function() {
        expect(fizzBuzz.execute(15)).toEqual("fizzbuzz");
        expect(fizzBuzz.execute(30)).toEqual("fizzbuzz");
        expect(fizzBuzz.execute(45)).toEqual("fizzbuzz");
    });

    it("should_throw_exception_when_given_lower_then_1", function() {
        expect(()=>{fizzBuzz.execute(0)}).toThrow(Error("Illegal Arguments"));
    });

    it("should_throw_exception_when_given_greater_then_100", function() {
        expect(()=>{fizzBuzz.execute(101)}).toThrow(Error("Illegal Arguments"));
    });

    it("should_return_olbati_when_given_multiple_of_7", function() {
        expect(fizzBuzz.execute(7)).toEqual("olbati");
        expect(fizzBuzz.execute(14)).toEqual("olbati");
    });

    it("should_return_fizzolbati_when_given_multiple_of_3_and_7", function() {
        expect(fizzBuzz.execute(21)).toEqual("fizzolbati");
        expect(fizzBuzz.execute(42)).toEqual("fizzolbati");
    });

    it("should_return_buzzolbati_when_given_multiple_of_5_and_7", function() {
        expect(fizzBuzz.execute(35)).toEqual("buzzolbati");
        expect(fizzBuzz.execute(70)).toEqual("buzzolbati");
    });
});