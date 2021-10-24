
//javaScript Object
const person = {
    name: 'John',
    age: 56,
    evaluations: [7, 10, 9]
}

//Log all properties of the Object to console
console.log(person);

//Dot notation for object
console.log(person.name);
console.log(person.age);

// Bracet notation
console.log(person['name']);
console.log(person['age']);

//Log the last property 
console.log(person.evaluations);

//Array
const strings = ["red", "blue", "green"];
console.log(strings);

//Log the length of Array
console.log(strings.length);

//Log the first element of Array
console.log(strings[0]);

//Log the last element of Array if length is nown
console.log(strings[2]);

//Log the index of the last element in Array if length is 'unkown'
console.log(strings.length - 1);

//Get the value of the last element in Array when length is 'unkown'
let lastArrayValue = strings[strings.length - 1];
console.log(lastArrayValue);

//add element to Array
strings.push("yellow");
console.log(strings);

//add number to Array
strings.push(599);
console.log(strings)

//add Object to Array
const object = {
    greeting: "Hi I am an object"
}

strings.push(object);
console.log(strings);

//Log the object just added to Array
console.log(strings[object]);

//Log only argument of the new Object
console.log(object.greeting);


//Assignment - Part 3: View a "real-life" object (Arrays with cat breeds)
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

//Get the value of the last element in Array when length is 'unkown'
let lastCatBreed = catBreeds[catBreeds.length - 1];
console.log(lastCatBreed);

//Energy level of Cat1
console.log(catBreeds[0].energy_level);

//The first temperament of the temperaments of the second cat
console.log(catBreeds[1].temperament[0]);

//The last temperament of the temperaments of the third cat (First target the element)
let lastTemperament = catBreeds[2].temperament;
console.log(lastTemperament);

//The last temperament of the temperaments of the third cat(Ater targeting the element thenthe inner Array )
console.log(lastTemperament[4]);


//The favorite food of the third cat 
console.log(catBreeds[2].food.favourite_food);

