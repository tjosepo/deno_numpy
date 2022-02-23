export type { default as ndarray } from "./array/ndarray.ts";

import { default as routines } from "./routines/mod.ts";

/**
 * # NumPy for Deno
 *
 * Provides
 *
 * 1. An array object of arbitrary homogeneous items
 * 2. Fast mathematical operations over arrays
 * 3. Linear Algebra, Fourier Transforms, Random Number Generation
 */
export const numpy = Object.freeze({
  ...routines,
});

export default numpy;
