import { SliceMap, Store } from "fluxless";

export class FluxlessStore<T> {
  private store: Store<SliceMap<T>>;

  constructor(slices: SliceMap<T>) {
    this.store = new Store(slices);
    return new Proxy(this, {
      apply: (_target, _thisArg, args) => {
        return this.store;
      },
    });
  }
}
