// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
  constructor({ title = '', studio = '', rating = 'PG' } = { title: '', studio: '', rating: 'PG' }) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

const movie1 = new Movie();
console.log(movie1);

const movie2 = new Movie({ title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13' });
console.log(movie2);

console.log('#############################################################################');

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  // set and get radius values
  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    return (this.radius);
  }
  // set and get color value
  setColor(color) {
    this.color = color;
  }

  getColor() {
    return (this.color);
  }
  // get area of a circle
  getArea() {
    return Math.floor(this.radius * this.radius * (Math.PI));
  }

  //get circumference of a circle
  getCircumference() {
    return Math.floor(2 * (Math.PI) * this.radius);
  }
}

const circle1 = new Circle(10, "Red");
console.log(circle1);
console.log(`Area is ${circle1.getArea()}`);
console.log(`Circumference is ${circle1.getCircumference()}`);

console.log('#############################################################################');

// 3. Write a “person” class to hold all the details.

class Person {
  constructor(name, role, age, salary, occupation) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.salary = salary;
    this.occupation = occupation;
  }

}

const person1 = new Person("Shivam", "Developer", 30, 4500, "Engineer");

console.log(person1);

console.log('#############################################################################');

// 4. write a class to calculate the uber price.

class Uber {
  constructor(name, baseFare, sourceTrip, destinationTrip, totalDistance) {
    this.name = name;
    this.baseFare = baseFare;
    this.sourceTrip = sourceTrip;
    this.destinationTrip = destinationTrip;
    this.totalDistance = totalDistance;
  }

  totalFare() {
    return (this.baseFare * this.totalDistance);
  }

}

const trip1 = new Uber("Shivam", 7, "Delhi", "Noida", 45);

console.log(trip1);
console.log(`Total fare in trip1 is ${trip1.totalFare()}`);
