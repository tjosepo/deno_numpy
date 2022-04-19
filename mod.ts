export { default as ndarray } from "./src/array/ndarray.ts";
export { default as dtype } from "./src/array/dtype.ts";
export * from "./src/types.d.ts";
import * as array from "./src/array/mod.ts";
import * as routines from "./src/routines/mod.ts";
import * as constants from "./src/constants.ts";

/**
 * # NumPy for Deno
 *
 * Provides
 *
 * 1. An array object of arbitrary homogeneous items
 * 2. Fast mathematical operations over arrays
 * 3. Linear Algebra, Fourier Transforms, Random Number Generation
 */
export default Object.freeze({
  ...array,
  ...routines,
  ...constants,
});
