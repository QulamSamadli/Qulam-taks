// #task object

// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()

// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

function Calculator() {
  this.read = () => {
    this.eded1 = +prompt(`eded daxil edin`);
    this.eded2 = +prompt(`eded daxil edin`);
  };
  this.sum = () => {
    return this.eded1 + this.eded2;
  };
  this.multiply = () => {
    return this.eded1 * this.eded2;
  };
  this.divide = () => {
    return this.eded1 / this.eded2;
  };
  this.subtract = () => {
    return this.eded1 - this.eded2;
  };
}

let calculator = new Calculator();

calculator.read();
console.log("Sum: " + calculator.sum());
console.log("Multiply: " + calculator.multiply());
console.log("Divide: " + calculator.divide());
console.log("Subtract: " + calculator.subtract());
