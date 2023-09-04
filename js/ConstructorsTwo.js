class flight {
  constructor(name, number, capacity, booked) {
    this.name = name;
    this.number = number;
    this.capacity = capacity;
    this.booked = booked;
  }
  availableSeats() {
    return this.capacity - this.booked;
  }
  bookSeats(seats) {
    if (this.availableSeats() >= seats) {
      this.booked += seats;
      console.log(
        `Seats booked successfully! on ${this.name} flight ${this.number}`
      );
    } else {
      console.log(`Seats not available! on ${this.name} flight ${this.number}`);
    }
  }
  previewDetails() {
    console.log(
      `Flight Name: ${this.name}, Flight Number: ${this.number}, Capacity: ${this.capacity}, Booked: ${this.booked}`
    );
  }
}

let flight1 = new flight("Indigo", 123, 100, 12);
let flight2 = new flight("Air India", 456, 150, 89);
let flight3 = new flight("Spice Jet", 789, 220, 200);

// flight2.bookSeats(149);
// flight3.bookSeats(223);

// console.log(flight1.availableSeats());
// console.log(flight2.availableSeats());
// console.log(flight3.availableSeats());

flight1.bookSeats(50);
flight1.previewDetails();
