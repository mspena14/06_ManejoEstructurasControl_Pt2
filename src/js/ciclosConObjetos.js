console.groupCollapsed("Ciclos con Objetos")
console.group("Team lider")
const teamLeader = {
    id: "115551",
    identificacionNumber: "1023485967",
    name: "javier",
    lastName: "perez",
    birthDate: new Date("1998-04-23 14:00:00"),
    phoneNumber: "(+57) 3136954017",
    email: "javier@gmail.com",
}

/* teamLeader.forEach(element => {
    console.log(element)
}) */ //No funcioana para objetos

for (const key in teamLeader) { 
    console.log(key)
}

console.log(Object.keys(teamLeader))

Object.keys(teamLeader).forEach(index => {
    console.log(teamLeader[index])
})
console.log(new Date())
console.groupEnd()
console.groupEnd()

console.groupCollapsed("Ejercicio práctico mine")

let numbers = []
for (let i = 1; i <= 100; i++) {
    numbers.push(i)
}

let pairNumber = []
for (let number of numbers) {
    if (number % 2 === 0) {
        pairNumber.push(number)
    }
}
console.log(numbers)
console.log(pairNumber)
console.groupEnd()

console.group("Leader form")
let listPairNumber = numbers.filter(number => {
    number % 2 == 0
})
console.groupEnd()
console.group("Ejercicio práctico")
const listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
]
listaEmpleados.forEach(empleado => {
    console.log(`El empleado ${empleado["nombre"].toLowerCase()} ocupa el cargo de: ${empleado.puesto.toLowerCase()} y gana ${empleado.salario.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
})
console.groupEnd()
console.groupEnd()