const { request } = require("express");
const express = require("express");
const app = express();
const port = 8001;
const { faker } = require ('@faker-js/faker')

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const User = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        something: faker.name.lastName(),
        userID: faker.datatype.uuid()
    }
    return User
}


const createCompany = () => {
    const Company = {
        coID: faker.datatype.uuid(),
        name: (faker.name.jobTitle() + ' Inc.'),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: 'United States'
        }
    }
    return Company
}

const userList = []
const companyList = []

const newFakeUser = createUser()
console.log(newFakeUser)

const newFakeCo = createCompany()
console.log(newFakeCo)


app.get('/api', (request, response) => {
    response.json({ message: 'hello w0rld'})
})

app.post('/api/users/new', (req, res) => {
    let newUser = createUser()
    userList.push(newUser)
    res.json({ newUser })
})

app.post('/api/companies/new', (req, res)=>{
    let newCompany = createCompany()
    companyList.push(newCompany)
    res.json({ newCompany })
})


//Read 'all'
app.get('/api/user/company', (req, res) => {
    res.json({ user: userList, company: companyList })
})

app.get('/api/users/', (request, response) => {
    response.json({
        data:userList
    })
})

app.get('/api/companies/', (request, response) => {
    response.json({
        companyList
    })
})


app.listen (port, () => console.log(`serving a server on port ${port}`))