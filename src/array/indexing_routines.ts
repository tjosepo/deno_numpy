import { ArrayLike } from "../types.d.ts";
import { kwargs } from "../shared/util.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";

/** Replaces specified elements of an array with given values. */
export function put(
  /** Target array. */
  a: ndarray,
  /** Target indices, interpreted as integers. */
  ind: ArrayLike,
  /** Values to place in a at target indices. If _v_ is shorter than _ind_ it will be repeated as necessary. */
  v: ArrayLike,
  options?: {
    /**
     * Specifies how out-of-bounds indices will behave.
     *
     * - ‘raise’ – raise an error (default)
     * - ‘wrap’ – wrap around
     * - ‘clip’ – clip to the range
     *
      ‘clip’ mode means that all indices that are too large are replaced by the index that addresses the last element along that axis. Note that this disables indexing with negative numbers. In ‘raise’ mode, if an exception occurs the target array may still be modified.
     */
    mode?: "raise" | "wrap" | "clip";
  },
): void {
  np.put(
    a.array,
    ind instanceof ndarray ? ind.array : ind,
    v instanceof ndarray ? v.array : v,
    ...kwargs(options),
  );
}
