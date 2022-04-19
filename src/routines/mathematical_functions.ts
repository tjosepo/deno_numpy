import { ArrayLike } from "../types.d.ts";
import { kwargs } from "../shared/util.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";

/** Return the non-negative square-root of an array, element-wise. */
export function sqrt(
  /** The values whose square-roots are required. */
  x: ArrayLike,
  options?: {
    /** A location into which the result is stored. If provided, it must have a shape that the inputs broadcast to. If not provided or None, a freshly-allocated array is returned. A tuple (possible only as a keyword argument) must have length equal to the number of outputs. */
    out?: ndarray | null | (ndarray | null)[];
    /** This condition is broadcast over the input. At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value. Note that if an uninitialized out array is created via the default `out=null`, locations within it where the condition is False will remain uninitialized. */
    where?: ArrayLike;
  },
): ndarray {
  return new ndarray(np.sqrt(x, ...kwargs(options)));
}
