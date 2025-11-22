import { Slice, SliceType } from "fluxless";
import { useEffect, useState } from "react";

export const useObserver = <T extends SliceType, K extends keyof T["states"]>(
  slice: Slice<T>,
  key: K
) => {
  const observer = slice.getState(key);
  const [state, setState] = useState(observer.get());

  useEffect(() => {
    const unsub = observer.subscribe(setState);
    return unsub;
  }, [slice, key]);

  return state;
};
