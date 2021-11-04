const pets = ["Milo", "Otis", "Garfield"]
const append = [...pets, "Odie"]; 
const prepend = ["Odie", ...pets];
const removeLast = [...pets];
removeLast.pop();
const removeFirst = [...pets];
removeFirst.shift();
