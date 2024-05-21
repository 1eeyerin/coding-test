function solution(numbers) {
    const arr = Array(9).fill().map((_, index) => index + 1);
    const filtered = arr.filter((num) => !numbers.includes(num));
    return filtered.reduce((acc, cur) => acc + cur, 0);
}