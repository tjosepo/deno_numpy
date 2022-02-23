import { assert, assertEquals, assertThrows } from "../../deps_test.ts";
import np, { ndarray } from "../../mod.ts";

Deno.test("ndarray.shape", () => {
  const x = np.array([1, 2, 3, 4]);
  assertEquals(x.shape, [4]);

  const y = np.zeros([2, 3, 4]);
  assertEquals(y.shape, [2, 3, 4]);

  y.shape = [3, 8];
  assertEquals(y.toList(), [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  assertThrows(() => (y.shape = [3, 6]));
});

Deno.test("ndarray.size", () => {
  const x = np.zeros([3, 5, 2]);
  assertEquals(x.size, 30);
});

Deno.test("ndarray.T", () => {
  let x = np.array([
    [1, 2],
    [3, 4],
  ]);
  assertEquals(x.T.toList(), [
    [1, 3],
    [2, 4],
  ]);

  x = np.array([1, 2, 3, 4]);
  assertEquals(x.T.toList(), [1, 2, 3, 4]);
});

Deno.test("ndarray.flat", () => {
  const x = np.arange(1, 7).reshape(2, 3);
  assertEquals(x.flat[3], 4);
  assertEquals(x.T.flat[3], 5);
  assert(Array.isArray(x.flat));
});

Deno.test("ndarray.toList", () => {
  const a = np.array([1, 2]);
  const a_list = a.toList();
  assertEquals(a_list, [1, 2]);
  assert(typeof a_list[0] === "number");
});

Deno.test("ndarray.copy", () => {
  const x = np.array(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    { order: "F" },
  );
  const y = x.copy();
  x.fill(0);
  assertEquals(x.toList(), [
    [0, 0, 0],
    [0, 0, 0],
  ]);
  assertEquals(y.toList(), [
    [1, 2, 3],
    [4, 5, 6],
  ]);
});

Deno.test("ndarray.fill", () => {
  let a = np.array([1, 2]);
  a.fill(0);
  assertEquals(a.toList(), [0, 0]);

  a = np.empty(2);
  a.fill(1);
  assertEquals(a.toList(), [1, 1]);
});

Deno.test("ndarray.reshape", () => {
  let a = np.arange(6).reshape([3, 2]);
  assertEquals(a.toList(), [
    [0, 1],
    [2, 3],
    [4, 5],
  ]);

  a = np.arange(6).reshape(2, 3);
  assertEquals(a.toList(), [
    [0, 1, 2],
    [3, 4, 5],
  ]);
});

Deno.test("ndarray.resize", () => {
  let a = np.array(
    [
      [0, 1],
      [2, 3],
    ],
    { order: "C" },
  );
  a.resize([2, 1]);
  assertEquals(a.toList(), [[0], [1]]);

  a = np.array(
    [
      [0, 1],
      [2, 3],
    ],
    { order: "F" },
  );
  a.resize([2, 1]);
  assertEquals(a.toList(), [[0], [2]]);
});

Deno.test("ndarray.transpose", () => {
  let x = np.array([
    [1, 2],
    [3, 4],
  ]);
  assertEquals(x.transpose().toList(), [
    [1, 3],
    [2, 4],
  ]);

  x = np.array([1, 2, 3, 4]);
  assertEquals(x.transpose().toList(), [1, 2, 3, 4]);
});

Deno.test("ndarray.swapaxes", () => {
  const x = np.array([[1, 2, 3]]);
  assertEquals(x.swapaxes(0, 1).toList(), [[1], [2], [3]]);
});

Deno.test("ndarray.flatten", () => {
  const a = np.array([
    [1, 2],
    [3, 4],
  ]);
  assertEquals(a.flatten().toList(), [1, 2, 3, 4]);
  assertEquals(a.flatten({ order: "F" }).toList(), [1, 3, 2, 4]);
});

Deno.test("ndarray.take", () => {
  const a = np.array([4, 3, 5, 7, 6, 8]);
  assertEquals(a.take([0, 1, 4]).toList(), [4, 3, 6]);
  assertEquals(
    a
      .take([
        [0, 1],
        [2, 3],
      ])
      .toList(),
    [
      [4, 3],
      [5, 7],
    ],
  );
});

Deno.test("ndarray.put", () => {
  let a = np.arange(5);
  a.put([0, 2], [-44, -55]);
  assertEquals(a.toList(), [-44, 1, -55, 3, 4]);

  a = np.arange(5);
  a.put(22, -5, { mode: "clip" });
  assertEquals(a.toList(), [0, 1, 2, 3, -5]);
});

Deno.test("ndarray.repeat", () => {
  const x = np.array([
    [1, 2],
    [3, 4],
  ]);
  assertEquals(x.repeat(2).toList(), [1, 1, 2, 2, 3, 3, 4, 4]);
  assertEquals(x.repeat(3, { axis: 1 }).toList(), [
    [1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4],
  ]);
  assertEquals(x.repeat([1, 2], { axis: 0 }).toList(), [
    [1, 2],
    [3, 4],
    [3, 4],
  ]);
});

Deno.test("ndarray.sort", () => {
  const a = np.array([
    [1, 4],
    [3, 1],
  ]);
  a.sort({ axis: 1 });
  assertEquals(a.toList(), [
    [1, 4],
    [1, 3],
  ]);
  a.sort({ axis: 0 });
  assertEquals(a.toList(), [
    [1, 3],
    [1, 4],
  ]);
});

Deno.test("ndarray.max", () => {
  const a = np.arange(4).reshape([2, 2]);
  assertEquals(a.max(), 3);
  assertEquals((a.max({ axis: 0 }) as ndarray).toList(), [2, 3]);
});
