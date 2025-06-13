class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  } }

  class Bike extends Vehicle {
  static callCount = 0;

  constructor(wheels = 2, speed = 'fast enough') {
  
    super(wheels, speed);
  }
     static Calls() {
    Bike.callCount++;}
  }
  var bike1 = new Bike();
    Bike.Calls();
    Bike.Calls();
    console.log(Bike.callCount); 
//لوالمقصود اني احسبكام مره اتنادت عليها الميثود لكن لو المقصود ان كام اوبجيكت اتكريت هحط الي في الميثود في الكونستركتور وممكن احط في الستاتيك ميثود جمله مثله كام كره اتنادت عليها واعمل كول لل callcount