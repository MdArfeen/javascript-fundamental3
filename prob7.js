//basic while loop
/*
while (condition) {
    // Code to execute
}

let count = 0;

while (count < 5) {
    console.log(count); 
    count++;
}
    */

//2.while loop with condition

/*
function countdownFrom(n) {
    while (n >= 0) {
        console.log(n);  
        n--;             
    }
}

countdownFrom(5);
*/

//3. while loop with break condition
let arr=[1,2,3,4,5]

function firstevenNumbers(arr){
    let i=0;
    while(i<arr.length){
        if(arr[i]%2==0){
            console.log(arr[i])
           

            break;
        }
        i++
    }
}
firstevenNumbers(arr)