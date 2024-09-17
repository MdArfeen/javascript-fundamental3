//statement vs expression
//Statements: Complete units of execution. They perform actions but do not return values. Examples include if, 
//for, while, and variable declarations.

//Expressions: Produce a value and can be part of statements. Examples include 5 + 3, "hello", or x.

// Statement
/*
if (true) {
    console.log("This is a statement.");
}

// Expression
let y = 10 * 2; // The expression 10 * 2 evaluates to 20
*/

//2.Expression in function

/*
function expressionInFunction(a,b){

 return a+b;
}
 let x=10;
 let y=15;

 if(expressionInFunction(x,y)>20){
    console.log("The result is greater than 20")
 }else{
    console.log("The result is 20 or less")
 }
    */

 //3. complex expression in conditional.
 function complexExpression(a, b, c) {
    // Perform a combination of expressions
    var sum = a + b;
    var product = c * b;
    
    // Calculate the difference
    var comparison;
    
    if (sum > product) {
        comparison = 1;
    } else if (sum < product) {
        comparison = -1;
    } else {
        comparison = 0;
    }

    // Use switch to determine the result based on the comparison
    switch (comparison) {
        case 1:
            return "Sum (" + sum + ") is greater than Product (" + product + ")";
        case -1:
            return "Product (" + product + ") is greater than Sum (" + sum + ")";
        case 0:
            return "Sum (" + sum + ") is equal to Product (" + product + ")";
        default:
            return "Unexpected result";
    }
}

// Example usage
var result = complexExpression(3, 4, 5);  // Sum is 7, Product is 20
console.log(result);  // Output: "Product (20) is greater than Sum (7)"

