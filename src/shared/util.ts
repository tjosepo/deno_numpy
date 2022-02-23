import { NamedArgument } from "../../deps.ts";

export function kwargs(obj?: Record<string, any>): NamedArgument[] {
  return obj
    ? Object.entries(obj).map(([n, v]) => new NamedArgument(n, v))
    : [];
}