//Type coercion
/*
function Checkcoercion(a,b){
if(a==b){
    console.log(loosequality)
}
if(a===b){
    console.log(strictquality)
}
}
Checkcoercion("5",5)
Checkcoercion(flase,0)
Checkcoercion(null,undefined)
*/

//2.Coercion in Arithmetic
/*
function CoercionInArithmetic(a,b){
    let add=a+b;
    let subtract=a-b;
    let multi=a*b
    let div=a/b
console.log(add)
console.log(subtract)
console.log(multi)
console.log(div)
}
CoercionInArithmetic(4,8)*/


//Implicit coercion in conditionals

function CoerceInCondition(value){
    if(value>7){
        console.log(true)
    }else{
        console.log(false)
    }
}
CoerceInCondition(9)
CoerceInCondition(5)