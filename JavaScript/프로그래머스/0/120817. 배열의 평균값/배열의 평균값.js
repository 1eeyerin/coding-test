function solution(numbers) {
    let answer = 0;
    numbers.forEach(num => answer += num);
    const result = answer / numbers.length;
    if ((result % 0.5) === 0) return result.toFixed(1);
}