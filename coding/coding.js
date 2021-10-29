//Function sumZero is O(n^2) Quadratic Time because it nests a loop through the array in a loop through the array, and both loops grow when the length of the array is changed.
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


//uniqueChars is also O(n^2) for the same reason
function uniqueChars(string){
    let answer = 0
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < string.length; j++){
            if(j===i){
                answer += 0;
            } else if(j!==i){
                if(string[i]===string[j]){
                    answer++; 
                }
            }
        }
    }if(answer === 0){
            return true;
        } 
    return false;
}

console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

