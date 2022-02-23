export { default as ndarray } from "./src/array/ndarray.ts";
import * as routines from "./src/routines/mod.ts";

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
  ...routines,
});
