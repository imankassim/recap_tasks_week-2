const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];


function makeLegend(name){
  //console.log(name + " is now a legend.")
  return (name + " is now a legend.")
}



let legendaryCelebs = []
for (let i = 0; i<celebs.length; i++){
  legendaryCelebs.push(makeLegend(celebs[i]))
}


console.log(legendaryCelebs)


let vowelCelebs = celebs.filter((item) => {
  return (item.startsWith("A") || item.startsWith("E") || item.startsWith("I") || item.startsWith("O") || item.startsWith("U"))
})

console.log(vowelCelebs)