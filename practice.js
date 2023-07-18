function multiplyBiggerNumByTwo(num1, num2) {
  return moreOrLess(num1, num2, 1) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return moreOrLess(num1, num2, 1) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${moreOrLess(sum1, sum2, 1)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${moreOrLess(weight1, weight2, 0)} pounds.`
}


function moreOrLess(num1, num2, size) {
  // if size is 0, return smaller number
  if (size === 0) {
    return Math.min(num1, num2);
  // else, return bigger number
  } else {
    return Math.max(num1, num2);
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};