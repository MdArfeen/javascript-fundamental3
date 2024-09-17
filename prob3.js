//Type Identification in javascript
/*
function IdentifyType(value){
console.log(typeof(value))
}
IdentifyType("str")
IdentifyType(0)
IdentifyType([1,2])
IdentifyType({})
//IdentifyType(IdentifyType(value))
*/
/*
function Myfunction(){
    return "Hello World"
}
console.log(typeof(Myfunction))
*/

//check object vs array
/*
function isArrayOrObject(value){
    console.log(typeof(value))
}
isArrayOrObject(Array.isArray([1]))
isArrayOrObject(Array.isArray("str"))
*/

//ComplexTypeidentification
function IdentifyComplexType(values) {
    let types = [];
  
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
  
      if (Array.isArray(value)) {
        types.push("array");
      } else if (value instanceof Date) {
        types.push("date");
      } else if (value instanceof RegExp) {
        types.push("regexp");
      } else if (value === null) {
        types.push("null");
      } else if (value instanceof Object) {
        types.push("object");
      } else {
        types.push(typeof value);
      }
    }
  
    return types;
  }
  
  const mixedArray = [1, "hello", null, [1, 2, 3], { name: "John" }, new Date(), /abc/, undefined, function() {}];
  console.log(IdentifyComplexType(mixedArray));

  