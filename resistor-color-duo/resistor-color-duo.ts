const colorArr = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

// disallows passing other colors, 
// e.g. 'pink' to constructor
type Color = typeof colorArr[number];

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    this.colors = colors;

    this.validate();
  }

  value(): number {
    return colorArr.indexOf(this.colors[0]) * 10 + colorArr.indexOf(this.colors[1]);
  }

  validate(): void {
    if (this.colors.length < 2) {
      throw Error('At least two colors need to be present');
    }
  }
}

/** see this discussion:
 * https://stackoverflow.com/questions/44480644/string-union-to-string-array
 */
