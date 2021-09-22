function switchCase(letter) {
    // Write code below this line 
    var animals = "";
    switch (letter) {
        case "a":
            animals = "antelope";
            break;
        case "b":
            animals = "bird";
            break;
        case "c":
            animals = "cat";
            break;
        default:
            animals = "stuff";
            break;
    } 
    // Write code above this line
    return animals;
}

console.log(switchCase("a")); 
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.experts = switchCase;