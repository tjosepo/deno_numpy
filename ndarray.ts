import { kwargs } from "./shared/util.ts";
import { ArrayLike } from "./shared/types.d.ts";

/**
 * Represents a Numpy ndarray.
 *
 * The actual Python object can be accessed form the property `ndarray`.
 */
export default class ndarray {
  constructor(public ndarray: any) {}

  /** Performs a Python operator overloading. */
  #overload(other: unknown, method: string): ndarray {
    return other instanceof ndarray
      ? new ndarray(this.ndarray[method](other.ndarray))
      : new ndarray(this.ndarray[method](other));
  }

  /**
   * Tuple of array dimensions.
   *
   * The shape property is usually used to get the current shape of an array, but may also be used to reshape the array in-place by assigning a tuple of array dimensions to it. As with numpy.reshape, one of the new shape dimensions can be -1, in which case its value is inferred from the size of the array and the remaining dimensions. Reshaping an array in-place will fail if a copy is required.
   */
  get shape(): number {
    return this.ndarray.shape.valueOf();
  }

  /**
   * Number of elements in the array.
   *
   * Equal to `np.prod(a.shape)`, i.e., the product of the array’s dimensions.
   */
  get size(): number {
    return this.ndarray.size.valueOf();
  }

  /** Total bytes consumed by the elements of the array. */
  get nbytes(): number {
    return this.ndarray.nbytes.valueOf();
  }

  /**
   * The transposed array.
   *
   * Same as `this.transpose()`.
   */
  get T(): ndarray {
    return this.transpose();
  }

  /** A 1-D iterator over the array. */
  get flat(): number[] {
    return this.flatten().toList();
  }

  add(value: ArrayLike): ndarray {
    return this.#overload(value, "__add__");
  }

  sub(value: ArrayLike): ndarray {
    return this.#overload(value, "__sub__");
  }

  mul(value: number | ArrayLike): ndarray {
    return this.#overload(value, "__mul__");
  }

  pow(value: number): ndarray {
    return this.#overload(value, "__pow__");
  }

  lt(value: number): ndarray {
    return this.#overload(value, "__lt__");
  }

  dot(value: ArrayLike): ndarray {
    return this.#overload(value, "__matmul__");
  }

  /** Copy an element of an array to a standard JavaScript object and return it. */
  item<T = number>(args?: number | number[]): T {
    return Array.isArray(args)
      ? this.ndarray.item(...args).valueOf()
      : this.ndarray.item(args).valueOf();
  }

  /**
   * Return the array as an `a.ndim`-levels deep nested list of JavaScript object.
   *
   * Return a copy of the array data as a (nested) JavaScript list. Data items are converted to the nearest compatible builtin JavaScript type, via the item function.
   *
   * If `a.ndim` is 0, then since the depth of the nested list is 0, it will not be a list at all, but a simple JavaScript object.
   */
  toList<T = number[]>(): T {
    return this.ndarray.tolist().valueOf();
  }

  /** Return a copy of the array. */
  copy(options?: {
    /** Controls the memory layout of the copy. ‘C’ means C-order, ‘F’ means F-order, ‘A’ means ‘F’ if a is Fortran contiguous, ‘C’ otherwise. ‘K’ means match the layout of a as closely as possible. (Note that this function and `numpy.copy` are very similar but have different default values for their order= arguments, and this function always passes sub-classes through.) */
    order?: "C" | "F" | "A" | "K";
  }): ndarray {
    return new ndarray(this.ndarray.copy(...kwargs(options)));
  }

  /**
   * Returns an array containing the same data with a new shape.
   *
   * Refer to numpy.reshape for full documentation.
   */
  reshape(
    shape: number | number[],
    options?: {
      /** Read the elements of a using this index order, and place the elements into the reshaped array using this index order. ‘C’ means to read / write the elements using C-like index order, with the last axis index changing fastest, back to the first axis index changing slowest. ‘F’ means to read / write the elements using Fortran-like index order, with the first index changing fastest, and the last index changing slowest. Note that the ‘C’ and ‘F’ options take no account of the memory layout of the underlying array, and only refer to the order of indexing. ‘A’ means to read / write the elements in Fortran-like index order if a is Fortran contiguous in memory, C-like order otherwise. */
      order?: "C" | "F" | "A";
    }
  ): ndarray;
  reshape(row: number, cols: number): ndarray;
  reshape(a: unknown, b: unknown): ndarray {
    if (b && typeof b === "object") {
      return new ndarray(this.ndarray.reshape(a, ...kwargs(b)));
    } else if (typeof b === "number") {
      return new ndarray(this.ndarray.reshape(a, b));
    }
    return new ndarray(this.ndarray.reshape(a));
  }

  /** Change shape and size of array in-place. */
  resize(
    newShape: number[],
    options?: {
      /** If `false`, reference count will not be checked. Default is `true`. */
      refcheck?: boolean;
    }
  ): void {
    this.ndarray.resize(newShape, ...kwargs(options));
  }

  /** Returns a view of the array with axes transposed. */
  transpose(): ndarray;
  transpose(...axes: number[]): ndarray {
    return axes
      ? new ndarray(this.ndarray.transpose(...axes))
      : new ndarray(this.ndarray.transpose());
  }

  /** Return a copy of the array collapsed into one dimension. */
  flatten(options?: {
    /** ‘C’ means to flatten in row-major (C-style) order. ‘F’ means to flatten in column-major (Fortran- style) order. ‘A’ means to flatten in column-major order if a is Fortran contiguous in memory, row-major order otherwise. ‘K’ means to flatten a in the order the elements occur in memory. The default is ‘C’. */
    order?: "C" | "F" | "A" | "K";
  }): ndarray {
    return new ndarray(this.ndarray.flatten(...kwargs(options)));
  }

  /** Sort an array in-place. Refer to `numpy.sort` for full documentation. */
  sort(options?: {
    /** Axis along which to sort. Default is -1, which means sort along the last axis. */
    axis?: number;
    /** Sorting algorithm. The default is ‘quicksort’. Note that both ‘stable’ and ‘mergesort’ use timsort under the covers and, in general, the actual implementation will vary with datatype. The ‘mergesort’ option is retained for backwards compatibility. */
    kind?: "quicksort" | "mergesort" | "heapsort" | "stable";
    /** When _a_ is an array with fields defined, this argument specifies which fields to compare first, second, etc. A single field can be specified as a string, and not all fields need be specified, but unspecified fields will still be used, in the order in which they come up in the dtype, to break ties. */
    order?: string | string[];
  }): void {
    this.ndarray.sort(...kwargs(options));
  }

  /** Return the maximum along a given axis. */
  max(options?: {
    /** Axis or axes along which to operate. By default, flattened input is used. */
    axis?: number | number[];
    /** Alternative output array in which to place the result. Must be of the same shape and buffer length as the expected output. See Output type determination for more details. */
    out?: never;
    /**
     * If this is set to `true`, the axes which are reduced are left in the result as dimensions with size one. With this option, the result will broadcast correctly against the input array.
     *
     * If the default value is passed, then keepdims will not be passed through to the amax method of sub-classes of ndarray, however any non-default value will be. If the sub-class’ method does not implement keepdims any exceptions will be raised.
     */
    keepdims?: boolean;
    /** The minimum value of an output element. Must be present to allow computation on empty slice. See reduce for details. */
    initial?: number;
    /** Elements to compare for the maximum. See reduce for details. */
    where?: boolean[] | ndarray;
  }): number | ndarray {
    return this.ndarray.max(...kwargs(options));
  }
}
