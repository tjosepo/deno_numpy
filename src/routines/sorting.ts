import { ArrayLike } from "../types.d.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";

/** Return elements chosen from _x_ or _y_ depending on _condition_. */
export function where(
  condition: ArrayLike,
  x?: ArrayLike,
  y?: ArrayLike,
): ndarray {
  const broadcasts = [x, y].filter(Boolean);

  return new ndarray(np.where(condition, ...broadcasts));
}
