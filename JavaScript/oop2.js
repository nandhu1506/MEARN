const boleno = {
    model : "HatchBack",
    manufacturer : "Maruthi Suzuki",
    price : "10 Lakhs"
}

const glanza = {
    manufacturer : "Toyota",
    price : "13 Lakhs"
}

glanza.__proto__ = boleno
console.log(`Model of Glanza : ${glanza.model}, Manufacturer : ${glanza.manufacturer}`);