import React, { createContext, PropsWithChildren, useContext } from "react";

export class Context<T> {
  private context: React.Context<T>;

  constructor(defaultValue: T) {
    this.context = createContext(defaultValue);
  }

  Provider = ({ children, value }: PropsWithChildren<{ value: T }>) => {
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
