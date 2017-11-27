/**var B=[1,2,3,5,6,7];
var C = B.map(function(coffee){
  return 0
}


Module.exports = xyz;**/

function findNumbers(values)  {

let result = [];

for (let i = 0; i < values.length; i++) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

for (let i = 1; i <= result.length; i++) {
    if (undefined === result[i]) {
      return i;
    }
  }

return 1

}

module.exports = findNumbers;
//*sort an array
//*only accept positive integers
//*remove duplication
//*loop over it
//*[1,2,3,4,5] 1st+1 ==2nd
//*index+1 should = your value **/
//* let results = [...new Set(A)]
//*sort()
//*filter (a => a > 0 && Number.isInteger(a))
//*.reduce ((acc,value,ind) => {
//*.const i = ind+1
//*if (val===i){
//*return acc;
//*}if (i<acc){
//*}return i
//* }
//if return acc
//infinity);
//if(result===infinity){
//return array.length+1;
//}
//}return result;
