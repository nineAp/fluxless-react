import { Slice, SliceMap, SliceType } from "fluxless";

export const createSliceMap = <T>(slices: Slice<SliceType>[]): SliceMap<T> => {
  const result: SliceMap<T> = {} as SliceMap<T>;
  slices.forEach((slice) => {
    (result as any)[slice.name] = slice;
  });
  return result;
};
