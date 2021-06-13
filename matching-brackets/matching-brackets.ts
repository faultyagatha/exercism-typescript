export class MatchingBrackets {
  private str: string;
  constructor(str: string) {
    this.str = str;
  }

  isPaired(): boolean {
    if (this.str.length === 0) { return true; }
    const stack = [];
    for (let i = 0; i < this.str.length; i++) {
      switch (this.str[i]) {
        case "[":
          stack.push(this.str[i]);
          break;
        case "]":
          if (stack.pop() !== "[") { return false; }
          break;
        case "{":
          stack.push(this.str[i]);
          break;
        case "}":
          if (stack.pop() !== "{") { return false; }
          break;
        case "(":
          stack.push(this.str[i]);
          break;
        case ")":
          if (stack.pop() !== "(") { return false; }
          break;
        default:
      }
    }
    return stack.length === 0;
  }
}