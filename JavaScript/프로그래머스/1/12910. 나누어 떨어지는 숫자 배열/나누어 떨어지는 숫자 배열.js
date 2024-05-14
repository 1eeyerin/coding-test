function solution(arr, divisor) {
    const filtered = arr.filter((n) => (n % divisor === 0));
    
    return filtered.length === 0 ? [-1] : filtered.sort((a, b) => a - b);
}