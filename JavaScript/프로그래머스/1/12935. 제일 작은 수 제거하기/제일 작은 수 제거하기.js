function solution(arr) {
    const sortArray = [...arr].sort((a, b) => a - b);
    return sortArray.length === 1 ? [-1] : arr.filter((num) => num !== sortArray[0]);
}