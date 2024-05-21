function solution(a, b) {
    const result = a.map((num, index) => num * b[index]);
    return result.reduce((acc, cur) => acc + cur, 0);
}