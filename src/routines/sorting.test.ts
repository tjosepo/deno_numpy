import { assertEquals } from "../../deps_test.ts";
import np, { ndarray } from "../../mod.ts";

Deno.test("numpy.where", () => {
  const grades = np.array([1, 3, 4, 2, 5, 5]);
  const results = np.where(grades.gt(3));
  assertEquals(grades.getItem(results).toList(), [4, 5, 5]);

  let a = np.arange(10);
  a = np.where(a.lt(5), a, a.mul(10)) as ndarray;
  assertEquals(a.toList(), [0, 1, 2, 3, 4, 50, 60, 70, 80, 90]);
});
