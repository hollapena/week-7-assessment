
function sumZero(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            sum = arr[i]+arr[j]
        } 
        if(sum === 0){
            return true;}
        }
            return false;
        }


console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1,2,3]))
console.log(sumZero([1,2,3,-2]))

function uniqueChars(string){
    
}
