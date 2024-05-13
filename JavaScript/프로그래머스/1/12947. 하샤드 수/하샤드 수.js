function solution(x) {
    var num = String(x).split('').reduce((acc, cur) => acc += parseInt(cur), 0);
    console.log(num);
    return !!(x % num === 0);
}