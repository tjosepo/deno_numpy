import { NamedArgument } from "../../deps.ts";

// deno-lint-ignore no-explicit-any
export function kwargs(obj?: Record<string, any>): NamedArgument[] {
  return obj
    ? Object.entries(obj).map(([n, v]) => new NamedArgument(n, v))
    : [];
}
