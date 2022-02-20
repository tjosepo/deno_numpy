import { ArrayLike } from "../shared/types.d.ts";
import ndarray from "../ndarray.ts";
import np from "../shared/numpy.ts";

/** Return the shape of an array. */
export function shape(a: ArrayLike): number[] {
  return a instanceof ndarray
    ? np.shape(a.ndarray).valueOf()
    : np.shape(a).valueOf();
}
