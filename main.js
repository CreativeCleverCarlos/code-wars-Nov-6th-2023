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