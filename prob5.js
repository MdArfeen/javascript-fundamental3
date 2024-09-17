//1 write for loop that prints 1 to 10
/*
for(i=0;i<=10;i++){
    console.log(i)
}
    */

// 2for loop with array
/*

const arr=["apple","orange","grapes","papaya"]


for(i=0;i<=arr.length;i++){
    console.log(arr[i])
}
    */

//nested for loop 

/*
function createMultiplicationTable(n) {
    // Create an empty array to hold the 2D multiplication table
    var table = [];

    // Outer loop for rows (1 to n)
    for (var i = 1; i <= n; i++) {
        // Create an empty array for each row
        var row = [];
        
        // Inner loop for columns (1 to n)
        for (var j = 1; j <= n; j++) {
            // Multiply row number by column number and add to the row array
            row.push(i * j);
        }

        // Add the row to the table array
        table.push(row);
    }

    // Return the 2D array representing the multiplication table
    return table;
}

// Example usage
var n = 5;
var result = createMultiplicationTable(n);
console.log(result);

*/