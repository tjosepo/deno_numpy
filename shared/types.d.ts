import ndarray from "../ndarray.ts";

export type ArrayLike = number[] | number[][] | ndarray;

export interface Param {
  /** Whether to store multi-dimensional data in row-major (C-style) or column-major (Fortran-style) order in memory. */
  order: "C" | "F";
  /** Reference object to allow the creation of arrays which are not NumPy arrays. If an array-like passed in as like supports the `__array_function__` protocol, the result will be defined by it. In this case, it ensures the creation of an array object compatible with that passed in via this argument. */
  Like: ArrayLike;
}
