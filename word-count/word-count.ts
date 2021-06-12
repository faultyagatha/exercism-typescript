export class Words {
  count(sentence: string): Map<string, number> {
    const wordMap = new Map();
    const wordArr = sentence.trim().toLowerCase().split(/\s+/);
    let currCounter;
    for (let i = 0; i < wordArr.length; i++) {
      if (wordMap.has(wordArr[i])) {
        currCounter = wordMap.get(wordArr[i]);
        wordMap.set(wordArr[i], (currCounter || 0) + 1);
      } else {
        wordMap.set(wordArr[i], 1);
      }
    }
    return wordMap;
  }
}