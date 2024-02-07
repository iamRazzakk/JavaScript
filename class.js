// /**/
class phone {
  constructor() {}
  brand = "MI";
  Battery = 6000;
  Display = "emolate";
  Price = 20000;
  useStorage = (TotalStorage, CurrentStorage) => {
    console.log(TotalStorage - CurrentStorage);
  };
}
const object = new phone();
const result = object.useStorage(250, 100);
console.log(result);

// /*************************** constructor ******************************/
class phone {
  constructor(a, b) {
console.log("I am Constructor");
    console.log(a + b);
  }
}
const object = new phone(2,3);
console.log(object);

/*************************************Inheritance*******************************************/

// jokhun ekta class er data r ekta class use krte cai like than extends and (first er class) ta call kre dite hbbe.
class fn {
  sum(a, b) {
    console.log(a + b);
  }
}
class fn2 extends fn {
  sum(a, b) {
//     //remember that sob somoi same name rakte hbbe na hoi kaj krebe na like sum (ok) multiply(not ok)
    console.log(a * b);
  }
}
const object = new fn2();
object.sum(20, 50);


/************************ for Change data***************************************************/ 
class person {
  myAge = 30;
  constructor(age) {
    this.myAge = age;
    console.log(age);
  }
  printMyName = () => {
    console.log(this.myAge,"");
  };
}
let object = new person(100);
object.printMyName();