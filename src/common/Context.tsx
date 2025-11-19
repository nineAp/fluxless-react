import React, { createContext, PropsWithChildren, useContext } from "react";

export class Context<T> {
  private context: React.Context<T>;

  constructor(defaultValue: T) {
    this.context = createContext(defaultValue);
  }

  Provider({ children, value }: PropsWithChildren<{ value: T }>) {
    return (
      <this.context.Provider value={value}>{children}</this.context.Provider>
    );
  }

  use() {
    return useContext(this.context);
  }
}
