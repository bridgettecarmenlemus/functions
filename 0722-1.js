// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchSticks(sticks) {
    if (sticks < 0) {
      return "Please give a positive number";
    } else if (sticks === 0) {
      return 0;
    }
    let totalAmountOfSticks = (sticks - 1) * 5 + 6;
    return totalAmountOfSticks;
  }
  
  sticks = 0;
  
  console.log(matchSticks(5));