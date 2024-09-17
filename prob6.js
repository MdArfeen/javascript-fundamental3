//Basic switch case

/*
function getdayofweek(WeekNumber){

switch (WeekNumber) {
    case "Monday":
        console.log("Today Is Monday");
        break;
        case "Tuesday":
        console.log("Today Is Tuesday");
        break;
        case "Wednesday":
        console.log("Today Is Wednesday");
        break;
        case "Thursday":
        console.log("Today Is Thursday");
        break;
        case "Friday":
        console.log("Today Is Friday");
        break;
        case "Saturday":
        console.log("Today Is Monday");
        break;
}
}
getdayofweek("Wednesday")

*/

//2.switch with fall through

/*
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
        case "Saturday":
            console.log("It's weekend!");
            break;
            case "Sunday":
                console.log("It's Sunday ohoo!");
                break;
    default:
        console.log("It's a regular day.");
}
*/

//3.switch case with multiple condition
function classifyAnimal(animal) {
    switch (animal.toLowerCase()) {
        case "dog":
        case "cat":
        case "cow":
        case "human":
            console.log(animal + " is a mammal.");
            break;

        case "eagle":
        case "sparrow":
        case "penguin":
        case "parrot":
            console.log(animal + " is a bird.");
            break;

        case "snake":
        case "lizard":
        case "crocodile":
        case "turtle":
            console.log(animal + " is a reptile.");
            break;

        case "frog":
        case "toad":
        case "salamander":
            console.log(animal + " is an amphibian.");
            break;

        case "shark":
        case "salmon":
        case "trout":
        case "goldfish":
            console.log(animal + " is a fish.");
            break;

        case "ant":
        case "bee":
        case "spider":
        case "butterfly":
            console.log(animal + " is an insect.");
            break;

        default:
            console.log(animal + " is not classified.");
    }
}

// Example usage
classifyAnimal("Dog");      
classifyAnimal("eagle");   
classifyAnimal("shark");   
classifyAnimal("snake");    
classifyAnimal("ant");      
classifyAnimal("dolphin");  
