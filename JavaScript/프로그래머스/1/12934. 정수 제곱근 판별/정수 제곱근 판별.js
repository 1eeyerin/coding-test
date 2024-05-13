function solution(n) {
    var answer = 0;
    var root = Math.sqrt(n);
    return (Number.isInteger(root) && root > 0) ? Math.pow(root + 1, 2) : -1;
}