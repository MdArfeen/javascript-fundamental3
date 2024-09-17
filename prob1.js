//convrt to number
/*function ConvertToNumber(value){
console.log(Number(value))
}
ConvertToNumber(("10"))
ConvertToNumber(("20.5"))
*/

//convert to string
/*
function ConvertToNumber(value){
    console.log((String(value)))
    }
    ConvertToNumber("10")
    ConvertToNumber(0)
    ConvertToNumber([1,2,3,4])
    ConvertToNumber({a:1})
  */
  
    //convert n compare
function ConvertandCompare(a,b){
    const numberA=Number(a);
    const numberB=Number(b);

    const stringA=String(a);
    const stringB=String(b);

    if(numberA===numberB){
    return ([numberA, numberB])
    }
    if(stringA===stringB){
        return ([stringA,stringB])
        } 

        return[a,b]

}
const [a,b]=ConvertandCompare(false,1)
console.log({a,b})
