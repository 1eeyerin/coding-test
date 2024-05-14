function solution(num) {
    let answer = 0;
    let value = num;
    

    if (value === 1) {
        return 0;
    }
    
    while(true) {
        answer++;
        (value % 2 === 0) ? value /= 2 : value = (value * 3) + 1;
        
        if (value === 1) {
            break;
        }
        else if (answer >= 500) {
            answer = -1;
            break;
        }
    };
    
    return answer;
}