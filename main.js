//P.R.E.P

//Parameter - Only a number will be given, the number will be positive 

//Return - Return to the console an answer

//Example - divisor = 37, bound = 200 ==> return (185)



function maxMultiple(divisor, bound){
    //Pseudo code

    //first we set the max to 0, and this is where the answer will be plugged into 
    let max = 0;
    // a for statement is used and a new value is plugged in that is used as a parameter for the divisor, and divider for the boud.
    //It is also placed within a loop that we know when to make it stop
    for (let j = divisor; j <= bound; j++){

        //if the value j when divided by the divisor is equal to 0 (which they are already equal, and j is greater than the max, max is equal to j...) Gotta admit, i don't really get it
        if (j % divisor == 0 && j > max ){
            max = j
        }
    }

    return max

  }
  console.log(maxMultiple(9, 28))
//omg... this is so much simpler
  function daFrig(a,b){
    return a-a%b
    
  }
  console.log(daFrig(17,6))


  /** JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given**/

  //P.R.E.P

  //Parameter - an array will be given, the array values will all be numbers, and they will all be positive

  //Return - to the console

  //Example - getEvenNumbers([2,4,5,6]) // should == [2,4,6]

  //Pseudo code

  function getEvenNumbers(numbersArray){
    
//filter through the array

//if there is a remainder of 0, keep

    let evenValues = numbersArray.filter((number) => number % 2 == 0);
    return evenValues

  }

  console.log(getEvenNumbers([1,2,3,4,5,6]))


  /** Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.**/

  //P.R.E.P

  //Parameter - Arrays will be given, the arrays will only have numbers within it, all of which are positive

  //Return - to the console a number

  /**Example - [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]. A sum total of 26 should be returned (1 + 5 + 20) **/

function sumOfMinimums(arr) {

    //Pseudo code

  let total = 0;
  
  for (let i = 0; i < arr.length; i++){
  //the "..." is referred to as a destructuring assignment. It allows this method to work on an array 
  // let lowestValue = Math.min(... arr)
   total += Math.min(...arr[i])
  }
  
  return total;
}

console.log(sumOfMinimums([[5,3,6,4], [4,3,9,1]])) 