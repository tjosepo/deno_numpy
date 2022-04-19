import { assert } from "../../deps_test.ts";
import np from "../../mod.ts";

Deno.test("numpy.e", () => {
  const e = np.e;
  assert(e > 2.71828182845904 && e < 2.71828182845906);
});

Deno.test("numpy.eulerGamma", () => {
  const eulerGamma = np.eulerGamma;
  assert(eulerGamma > 0.5772156649015328 && eulerGamma < 0.577215664901533);
});

Deno.test("numpy.pi", () => {
  const pi = np.pi;
  assert(pi > 3.141592653589792 && pi < 3.141592653589794);
});
