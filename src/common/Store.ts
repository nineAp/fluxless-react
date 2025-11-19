import { SliceMap, Store } from "fluxless";

export class FluxlessStore<T> {
  private store: Store<SliceMap<T>>;

  constructor(slices: SliceMap<T>) {
    this.store = new Store(slices);
  }

  get() {
    return this.store;
  }
}
