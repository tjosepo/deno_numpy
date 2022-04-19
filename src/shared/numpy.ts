import { python, PythonError } from "../../deps.ts";

// deno-lint-ignore no-explicit-any
let numpy: any;

try {
  numpy = python.import("numpy");
} catch (error: unknown) {
  if (!(error instanceof PythonError)) throw error;
  if (error.message !== "No module named 'numpy'") throw error;
  const p = Deno.run({ cmd: "python -m pip install numpy".split(" ") });
  await p.status();
  numpy = python.import("numpy");
}

export default numpy;
