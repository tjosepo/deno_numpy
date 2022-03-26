import { ArrayLike } from "../shared/types.d.ts";
import { kwargs } from "../shared/util.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";

/** Return elements chosen from _x_ or _y_ depending on _condition_. */
export function where(
  condition: ArrayLike,
  x?: ArrayLike,
  y?: ArrayLike,
): ndarray {
  const broadcasts = [x, y]
    .filter(Boolean)
    .map((x) => (x instanceof ndarray ? x.array : x));

  return new ndarray(
    np.where(
      condition instanceof ndarray ? condition.array : condition,
      ...broadcasts,
    ),
  );
}
