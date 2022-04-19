import { assertEquals } from "../../../deps_test.ts";
import np from "../../../mod.ts";

Deno.test("numpy.array", () => {
  const a = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
  assertEquals(a.toList()[0], [1, 2, 3, 4]);
});

Deno.test("numpy.zeros", () => {
  assertEquals(np.zeros(5).toList(), [0, 0, 0, 0, 0]);
  assertEquals(np.zeros([2, 1]).toList(), [[0], [0]]);
});

Deno.test("numpy.arange", () => {
  assertEquals(np.arange(3).toList(), [0, 1, 2]);
  assertEquals(np.arange(3, 7).toList(), [3, 4, 5, 6]);
  assertEquals(np.arange(3, 7, 2).toList(), [3, 5]);
});

Deno.test("numpy.linspace", () => {
  const a = np.linspace(2.0, 3.0, { num: 5 });
  assertEquals(a.toList(), [2, 2.25, 2.5, 2.75, 3]);
});
