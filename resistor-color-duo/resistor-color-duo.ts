const COLORS = [
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
];

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;

    this.validate();
  }

  value(): number {
    return COLORS.indexOf(this.colors[0]) * 10 + COLORS.indexOf(this.colors[1]);
  }

  validate(): void {
    if (this.colors.length < 2) {
      throw Error('At least two colors need to be present');
    }
  }
}
