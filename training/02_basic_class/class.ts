class Customer {
    // Proerties
    constructor( public firstName: string, public lastName: string){
    }

    // Method
    public getFirstName(): string{
        return this.firstName
    }

    public setFirstName(theFirst: string): void {
        this.firstName = theFirst;
    }
}

let myCustomer = new Customer("James", "Mary");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.setFirstName("ABC");
console.log(myCustomer.getFirstName())


class Customers {
    // Proerties
    constructor( private _firstName: string, private _lastName: string){
    }

    // Method
    public get firstName(): string{
        return this._firstName
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

let myCustomers = new Customers("James", "Mary");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName)
myCustomers.firstName = "ABC";
console.log(myCustomers.firstName)