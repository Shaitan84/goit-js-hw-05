'use strict'

class Car {
    constructor(objCar) {
      this.speed = 0; 
      this._price = objCar.price;
      this.maxSpeed = objCar.maxSpeed;
      this.isOn = false; 
      this.distance = 0; 
    }
  
    static getSpecs(car) {
      console.log(
        `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
      );
    }
  
    get price() {
      return this._price;
    }
  
    set price(price) {
      this._price = price;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      if (this.isOn === true) {
        this.isOn = false;
        this.speed = 0;
      } else {
        console.log('Машина выключена');
      }
    }
  
    acceleration(value) {
      if (this.speed + value > this.maxSpeed) {
        this.speed === this.maxSpeed;
      } else
        {
          this.speed += value;
        }
    }
  
    braking(value) {
      if (this.speed - value < 0) {
        this.speed === 0;
      } else
        {
          this.speed -= value;
        }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.acceleration(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.braking(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price);
  mustang._price = 4000;
  console.log(mustang.price);
