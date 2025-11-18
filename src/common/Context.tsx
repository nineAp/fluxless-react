import React, { createContext, PropsWithChildren, useContext } from "react";

export class Context<T> {
  private context: React.Context<T>;

  constructor(defaultValue: T) {
    this.context = createContext(defaultValue);
  }

  Provider({ children, value }: PropsWithChildren<{ value: T }>) {
    useContext(this.context);
    return (
      <this.context.Provider value={value}>{children}</this.context.Provider>
    );
  }

  getContext(): React.Context<T> {
    return this.context;
  }
}
