import { assertEquals } from "../../deps_test.ts";
import np from "../mod.ts";

Deno.test("array", () => {
  const a = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
  assertEquals(a.toList()[0], [1, 2, 3, 4]);
});
