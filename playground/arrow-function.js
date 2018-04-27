var square = x => x*x;
console.log(square(10));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiOption () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1,2,4);
user.sayHiOption(1,2,3);
