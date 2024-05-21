function solution(s) {
    const startIndex = (s.length / 2);
    const isInteger = Number.isInteger(startIndex);
    const endIndex = isInteger ? 2 : 1;
    const intIndex = isInteger ? Math.floor(startIndex) - 1 : Math.floor(startIndex);
    return s.slice(intIndex, intIndex + endIndex);
}