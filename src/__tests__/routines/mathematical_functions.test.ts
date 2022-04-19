import { assertEquals } from "../../../deps_test.ts";
import np from "../../../mod.ts";

Deno.test("numpy.sqrt", () => {
  assertEquals(np.sqrt([1, 4, 9]).toList(), [1, 2, 3]);
});
