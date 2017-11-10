function FizzBuzz() {
    this.config= new Map([[3, "fizz"], [5, "buzz"], [7, "olbati"]]);
}

FizzBuzz.prototype.execute = function (input) {
    if(input < 1 || input > 100){
        throw Error("Illegal Arguments");
    }
    let output = "";
    this.config.forEach(function (value, key) {
        if(input % key == 0){
            output += value;
        }
    });
    if(output == ""){
        output = input.toString();
    }
    return output;
};

module.exports = FizzBuzz;
