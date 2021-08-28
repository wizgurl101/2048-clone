class Tile {
  constructor(private value: number, private beenMerge: boolean) {}

  get getValue() {
    return this.value;
  }

  set setValue(num: number) {
    this.value = num;
  }

  get getBeenMergeStatus() {
    return this.beenMerge;
  }

  set setBeenMergeStatus(status: boolean) {
    this.beenMerge = status;
  }
}
