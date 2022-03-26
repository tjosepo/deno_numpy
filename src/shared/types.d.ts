import { TypeStr } from "../array/array_interface.ts";
import type ndarray from "../array/ndarray.ts";

// deno-lint-ignore no-empty-interface
export interface Scalar {}

export type ArrayLike =
  | ndarray
  | number
  | boolean
  | string
  | Scalar
  | ArrayLike[];

export type DataType = TypeStr | Scalar;
