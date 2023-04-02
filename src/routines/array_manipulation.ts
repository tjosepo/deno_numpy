import { ArrayLike } from "../types.d.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";
import { kwargs } from "../shared/util.ts";

/** Return the shape of an array. */
export function shape(a: ArrayLike): number[] {
  return np.shape(a).valueOf();
}

/**
 * Find the unique elements of an array.
 *
 * Returns the sorted unique elements of an array. There are three optional outputs in addition to the unique elements:
 * - the indices of the input array that give the unique values
 * - the indices of the unique array that reconstruct the input array
 * - the number of times each unique value comes up in the input array
 * @param ar Input array. Unless _axis_ is specified, this will be flattened if it is not already 1-D.
 * @param options
 */

export function unique(
  ar: ArrayLike,
  options?: {
    /** If True, also return the indices of ar (along the specified axis, if provided, or in the flattened array) that result in the unique array. */
    return_index?: boolean;
    /** If True, also return the indices of the unique array (for the specified axis, if provided) that can be used to reconstruct ar. */
    return_inverse?: boolean;
    /** If True, also return the number of times each unique item appears in ar. */
    return_counts?: boolean;
    /** The axis to operate on. If None, ar will be flattened. If an integer, the subarrays indexed by the given axis will be flattened and treated as the elements of a 1-D array with the dimension of the given axis, see the notes for more details. Object arrays or structured arrays that contain objects are not supported if the axis kwarg is used. The default is None. */
    axis?: number | null;
  },
): ndarray {
  return new ndarray(np.unique(ar, ...kwargs(options)));
}
