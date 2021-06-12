type Kind = "equilateral" | "isosceles" | "scalene";

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): Kind | Error {
    if (!this.isTriangle()) { throw Error("triangles violating triangle inequality are illegal"); }
    if (this.sides[0] === this.sides[1]) {
      if (this.sides[1] === this.sides[2]) {
        return "equilateral";
      } else {
        return "isosceles";
      }
    } else if (this.sides[0] === this.sides[2]) {
      if (this.sides[0] === this.sides[1]) {
        return "equilateral";
      } else {
        return "isosceles";
      }
    } else if (this.sides[1] === this.sides[2]) {
      if (this.sides[1] === this.sides[0]) {
        return "equilateral";
      } else {
        return "isosceles";
      }
    }
    return "scalene";
  }

  isTriangle(): boolean {
    if (this.sides.length !== 3) { return false; }
    let sum = 0;
    for (let i = 0; i < this.sides.length; i++) {
      if (this.sides[i] <= 0) { return false; }
      sum += this.sides[i];
    }
    if (this.sides.some((side) => side > (sum - side))) {
      return false;
    }
    return true;
  }
}
