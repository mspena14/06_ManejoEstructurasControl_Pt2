console.groupCollapsed("Manejo estructuras de control")
console.group("Print Lists by diferents types of for")
const listFruits = ["Apple", //0
"Orange", //1
"Banana", //2
"Grape", //3
"Strawberry",   //4
"Kiwi", //5
"Pineapple", //6
"Watermelon", //7
"Mango", //8
"Pear", //9
"Peach", //10
"Plum", //11
"Cherry", //12
"Blueberry", //13
"Raspberry", //14
"Blackberry", //15
"Lemon", //16
"Lime", //17
"Coconut", //18
"Pomegranate" ] //19

console.log(listFruits.length)
console.groupCollapsed("List with classic for")
// print list with classic for 
for (let i = 0; i < listFruits.length; i++) {
    console.info(listFruits[i])
}
console.groupEnd()

console.groupCollapsed("list with forEach")
// print list with forEach
console.groupCollapsed("List with forEach")
listFruits.forEach(fruit => {
    console.info(fruit)
})
console.groupEnd()
console.groupCollapsed("List in upper case with forEach")
listFruits.forEach(fruit => {
    console.info(fruit.toUpperCase())
})
console.groupEnd()
console.groupCollapsed("List in lower case with forEach")
listFruits.forEach(fruit => {
    console.info(fruit.toLowerCase())
})
console.groupEnd()
console.groupCollapsed("List with forEach with two variables") // Trae tanto valor y posicion 
listFruits.forEach((fruit, position) => {
    console.log(`the ${fruit.toLowerCase()} is in the position: ${position}`) // La primera variable es el valor y la segunda el indice
})
console.groupEnd()
console.groupEnd()

console.groupCollapsed("List with the same with For in") // Solo trae llaves
for (let key in listFruits) {
   console.log(`The ${listFruits[key].toLowerCase()} is in the position: ${key}`) //Con key enlista la posicion en la lista y con listFruits[key] el valor 
}
console.groupEnd()

console.groupCollapsed("List with for of") //Solo valores
for (let fruit of listFruits) {
    console.log(fruit)
}
console.groupEnd()
console.groupEnd()

