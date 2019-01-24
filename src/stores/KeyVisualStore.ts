import { observable, computed } from "mobx";

class KeyVisualStore {
  @observable public scrollTop = 0;
  @observable public headerHeight = 0;

  @computed get percentVisible() {
    if (this.headerHeight <= 0) {
      return 0;
    }
    if (this.scrollTop < 0) {
      return 1;
    }
    const percentVisible =
      (this.headerHeight - this.scrollTop) / this.headerHeight;
    return percentVisible < 0 ? 0 : percentVisible;
  }

  @computed get topPosition() {
    if (this.headerHeight < 50) { return 0; }
    return -this.headerHeight + 50;
  }
}

export default KeyVisualStore;
