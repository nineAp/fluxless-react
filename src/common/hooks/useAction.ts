import { Slice, SliceType } from "fluxless";
import { asyncify } from "../asyncify";

export const useAction = <
  T extends SliceType,
  K extends keyof T["states"],
  A extends keyof T["actions"]
>(
  slice: Slice<T>,
  state: K,
  action: A,
  isAsync: boolean = false,
  ...args: Parameters<T["actions"][A]>
) => {
  const act = (...innerArgs: Parameters<T["actions"][A]>) => {
    return slice.useAction(state, action, ...innerArgs);
  };

  const wrapped = isAsync ? asyncify(act) : act;

  wrapped(...args);
};
