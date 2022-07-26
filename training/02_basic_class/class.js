"use strict";
class Customer {
    // Proerties
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method
    getFirstName() {
        return this.firstName;
    }
    setFirstName(theFirst) {
        this.firstName = theFirst;
    }
}
let myCustomer = new Customer("James", "Mary");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.setFirstName("ABC");
console.log(myCustomer.getFirstName());
class Customers {
    // Proerties
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // Method
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomers = new Customers("James", "Mary");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
myCustomers.firstName = "ABC";
console.log(myCustomers.firstName);
