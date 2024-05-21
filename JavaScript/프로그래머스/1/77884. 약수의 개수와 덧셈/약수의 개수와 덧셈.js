function solution(left, right) {
  const lengthArr = Array.from({length: (right - left) + 1}, (_, index) => left + index);
  
  const divisors1 = lengthArr.map(num => {
    const numArray = Array.from({length: num}, (_, index) => index + 1);
    const divisors = numArray.filter((num, array) => numArray.length % num === 0);
    
    console.log(divisors);
    
    return divisors.length % 2 === 0 ? num : num * -1;
  });
  
  return divisors1.reduce((acc,cur) => acc + cur, 0);
} 