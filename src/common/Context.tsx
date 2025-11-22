import { SliceMap, Store } from "fluxless";
import React, { createContext, PropsWithChildren, useContext } from "react";

export class Context<T> {
  private context: React.Context<Store<SliceMap<T>>>;

  constructor(defaultValue: Store<SliceMap<T>>) {
    this.context = createContext<Store<SliceMap<T>>>(defaultValue);
  }

  Provider = ({
    children,
    value,
  }: PropsWithChildren<{ value: Store<SliceMap<T>> }>) => {
    return (
      <this.context.Provider value={value}>{children}</this.context.Provider>
    );
  };

  use() {
    const context = useContext(this.context);
    if (!context) {
      throw new Error("There is no context provded");
    }
    return context;
  }
}
