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
