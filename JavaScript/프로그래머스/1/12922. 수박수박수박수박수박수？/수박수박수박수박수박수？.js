function solution(n) {
    
    return Array(n).fill().map((_, index) => {
    const isEven = index % 2 === 0;
    return isEven ? '수' : '박';
    }).join("");
}