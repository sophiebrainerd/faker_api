const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.get("/api/users/new", (req, res) => {
    let person = new User();
    res.json( person );
    console.log( person );
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
    let set = [new User(), new Company()];
    res.json( set );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


