function solution(phone_number) {
    var replaceLength = phone_number.length - 4;
    const replaceWord = phone_number.substring(0, replaceLength);
    return phone_number.replace(replaceWord, '*'.repeat(replaceWord.length));
}