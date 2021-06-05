class ReverseString {
  static reverse(s: string): string {
    if (s.length === 0) return '';

    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
      result += s[i];
    }
    return result;
  }
}

export default ReverseString

/**
 * class ReverseString {
  static reverse(text: string): string {
    let str: string[] = text.split('')
    for(let i = 0; i < Math.floor(text.length / 2); i++) {
      [str[i], str[text.length-i-1]] = [str[text.length-i-1], str[i]];
    }
    return str.join('')
  }
}

export default ReverseString
 *
 */
