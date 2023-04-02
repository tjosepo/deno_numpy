import { ArrayLike, DataType } from "../types.d.ts";
import { kwargs } from "../shared/util.ts";
import ndarray from "../array/ndarray.ts";
import np from "../shared/numpy.ts";

/**
 * Create an array.
 * @param object An array, any object exposing the array interface, an object whose __array__ method returns an array, or any (nested) sequence. If object is a scalar, a 0-dimensional array containing object is returned.
 * @param options
 * @returns An array object satisfying the specified requirements.
 */
export function array(
  object: ArrayLike,
  options?: {
    dtype?: DataType;
    /** If true (default), then the object is copied. Otherwise, a copy will only be made if __array__ returns a copy, if obj is a nested sequence, or if a copy is needed to satisfy any of the other requirements (`dtype`, `order`, etc.) */
    copy?: boolean;
    /** Specify the memory layout of the array. If object is not an array, the newly created array will be in C order (row major) unless 'F' is specified, in which case it will be in Fortran order (column major). If object is an array the following holds. */
    order?: "K" | "A" | "C" | "F";
    /** If True, then sub-classes will be passed-through, otherwise the returned array will be forced to be a base-class array (default). */
    subok?: boolean;
    /** Specifies the minimum number of dimensions that the resulting array should have. Ones will be pre-pended to the shape as needed to meet this requirement. */
    ndmin?: number;
    /** Reference object to allow the creation of arrays which are not NumPy arrays. If an array-like passed in as like supports the `__array_function__` protocol, the result will be defined by it. In this case, it ensures the creation of an array object compatible with that passed in via this argument. */
    like?: ArrayLike;
  },
): ndarray {
  const array = np.array(object, ...kwargs(options));
  return new ndarray(array);
}

/** Return a new array of given shape and type, filled with zeros. */
export function zeros(
  shape: number | number[],
  options?: {
    dtype?: DataType;
    /** Whether to store multi-dimensional data in row-major (C-style) or column-major (Fortran-style) order in memory. */
    order?: "C" | "F";
    /** Reference object to allow the creation of arrays which are not NumPy arrays. If an array-like passed in as like supports the `__array_function__` protocol, the result will be defined by it. In this case, it ensures the creation of an array object compatible with that passed in via this argument. */
    like?: ArrayLike;
  },
): ndarray {
  const array = np.zeros(shape, ...kwargs(options));
  return new ndarray(array);
}

/** Return a new array of given shape and type, without initializing entries. */
export function empty(
  shape: number | number[],
  options?: {
    dtype?: DataType;
    /** Whether to store multi-dimensional data in row-major (C-style) or column-major (Fortran-style) order in memory. */
    order?: "C" | "F";
    /** Reference object to allow the creation of arrays which are not NumPy arrays. If an array-like passed in as like supports the `__array_function__` protocol, the result will be defined by it. In this case, it ensures the creation of an array object compatible with that passed in via this argument. */
    like?: ArrayLike;
  },
): ndarray {
  const array = np.empty(shape, ...kwargs(options));
  return new ndarray(array);
}

/**
 * Return evenly spaced values within a given interval.
 *
 * Values are generated within the half-open interval [start, stop) (in other words, the interval including start but excluding stop). For integer arguments the function is equivalent to the Python built-in range function, but returns an ndarray rather than a list.
 *
 * When using a non-integer step, such as 0.1, it is often better to use numpy.linspace. See the warnings section below for more information.
 * @param start Start of interval. The interval includes this value. The default start value is 0.
 * @param stop End of interval. The interval does not include this value, except in some cases where step is not an integer and floating point round-off affects the length of out
 * @param step Spacing between values. For any output out, this is the distance between two adjacent values, out[i+1] - out[i]. The default step size is 1. If step is specified as a position argument, start must also be given.
 * @param options
 * @returns Array of evenly spaced values.
 */
export function arange(
  start: number,
  stop: number,
  step: number,
  options?: {
    dtype?: DataType;
  },
): ndarray;
export function arange(
  stop: number,
  options?: {
    dtype?: DataType;
  },
): ndarray;
export function arange(
  start: number,
  stop: number,
  options?: {
    dtype?: DataType;
  },
): ndarray;
export function arange(
  start: number,
  stop?:
    | number
    | {
      dtype?: DataType;
    },
  step?:
    | number
    | {
      dtype?: DataType;
    },
  options?: {
    dtype?: DataType;
  },
): ndarray {
  if (typeof stop === "number" && typeof step === "number") {
    return new ndarray(np.arange(start, stop, step, ...kwargs(options)));
  }
  if (typeof stop === "number") {
    return new ndarray(np.arange(start, stop, ...kwargs(options)));
  }
  return new ndarray(np.arange(start, ...kwargs(options)));
}

/**
 * Return evenly spaced numbers over a specified interval.
 *
 * Returns num evenly spaced samples, calculated over the interval [start, stop].
 *
 * The endpoint of the interval can optionally be excluded.
 * @param start The starting value of the sequence.
 * @param stop The end value of the sequence, unless endpoint is set to False. In that case, the sequence consists of all but the last of `num + 1` evenly spaced samples, so that stop is excluded. Note that the step size changes when endpoint is False.
 * @param options
 * @returns There are num equally spaced samples in the closed interval `[start, stop]` or the half-open interval `[start, stop)` (depending on whether endpoint is True or False).
 */
export function linspace(
  start: ArrayLike,
  stop: ArrayLike,
  options?: {
    /** Number of samples to generate. Default is 50. Must be non-negative. */
    num?: number;
    /** If True, stop is the last sample. Otherwise, it is not included. Default is True. */
    endpoint?: boolean;
    /** If True, return (samples, step), where step is the spacing between samples. */
    retstep?: boolean;
    /** The type of the output array. If dtype is not given, the data type is inferred from start and stop. The inferred dtype will never be an integer; float is chosen even if the arguments would produce an array of integers. */
    dtype?: DataType;
    /** The axis in the result to store the samples. Relevant only if start or stop are array-like. By default (0), the samples will be along a new axis inserted at the beginning. Use -1 to get an axis at the end. */
    axis?: number;
  },
): ndarray {
  return new ndarray(np.linspace(start, stop, ...kwargs(options)));
}
