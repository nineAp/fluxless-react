import React, { createContext, PropsWithChildren, useContext } from "react";

export class Context<T> {
  private context: React.Context<T>;

  constructor(defaultValue: any) {
    this.context = createContext(defaultValue);
    useContext(this.context);
    return new Proxy(this, {
      apply: (_target, _thisArg, args) => {
        const [props] = args as [PropsWithChildren<{ value: T }>];
        const Provider = this.context.Provider;

        return <Provider value={props.value}>{props.children}</Provider>;
      },
    });
  }

  getContext() {
    return this.context;
  }
}
