// Debug and fix the code below. Analyze the code carefully to determine what it is supposed to do.

function squaed(a) {
    return a * a;
  }

  a = 10
//   Using the && operator, consider the following below:

// Consider a && b

// a is checked if it is true or false
// If a is false, false is returned
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).

function and(a, b) {
    if(a && b){
        const isTrue = true;
        return isTrue;
    } else{
        const isFalse = false;
        return isFalse;
    }
}

a = 15
b = 45

// Given the inputs true and false, fix the code below:

function has_bugs(buggy_code) {
    if (buggy_Code) {
        return 'sad days'
    } else  {
        const buggy = `it's a good day`
        return buggy
        }
    }


// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    if (a % b) {
return true;
        }
else {
    return false;
    }

}

a = 25
b = 400