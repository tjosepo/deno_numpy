import { assert, assertEquals, assertThrows } from "../../deps_test.ts";
import np from "../../mod.ts";

Deno.test("dtype.kind", () => {
  let dt = np.dtype("i");
  assertEquals(dt.kind, "i");

  dt = np.dtype("f8");
  assertEquals(dt.kind, "f");

  dt = np.dtype(np.int16);
  assertEquals(dt.kind, "i");
});

Deno.test("dtype.byteorder", () => {
  assertEquals(np.dtype("i2").byteorder, "=");
  assertEquals(np.dtype("i1").byteorder, "|");
  assertEquals(np.dtype("S2").byteorder, "|");
});
