let nextId = 1;

export class Metric {
  id: number;
  constructor(
    public name: string,
    public count: number,
    public unit?: string) {
      this.id = nextId++;
    }
}
