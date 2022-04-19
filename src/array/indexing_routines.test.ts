import { assertEquals } from "../../deps_test.ts";
import np from "../../mod.ts";

Deno.test("numpy.put", () => {
  let a = np.arange(5);
  np.put(a, [0, 2], [-44, -55]);
  assertEquals(a.toList(), [-44, 1, -55, 3, 4]);
  a = np.arange(5);
  np.put(a, 22, -5, { mode: "clip" });
  assertEquals(a.toList(), [0, 1, 2, 3, -5]);
});
