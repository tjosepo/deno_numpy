import { assertEquals } from "../../deps_test.ts";
import np from "../../mod.ts";

Deno.test("numpy.unique", () => {
  assertEquals(np.unique([1, 1, 2, 2, 3, 3]).toList(), [1, 2, 3]);
  assertEquals(
    np
      .unique([
        [1, 1],
        [2, 3],
      ])
      .toList(),
    [1, 2, 3],
  );

  let a = np.array([
    [1, 0, 0],
    [1, 0, 0],
    [2, 3, 4],
  ]);
  assertEquals(np.unique(a, { axis: 0 }).toList(), [
    [1, 0, 0],
    [2, 3, 4],
  ]);

  a = np.array(["a", "b", "b", "c", "a"]);
  assertEquals(np.unique(a).toList(), ["a", "b", "c"]);
});
