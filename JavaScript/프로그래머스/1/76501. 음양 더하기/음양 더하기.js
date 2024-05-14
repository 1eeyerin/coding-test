function solution(absolutes, signs) {
    const result = absolutes.reduce((acc, cur, idx) => {
        const sign = signs[idx] ? '+' : '-';
        return acc += parseInt(`${sign}${cur}`);
    }, 0);
    
    return result;
}