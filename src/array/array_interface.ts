/** Character code giving the basic type of the array. */
export type TypeCharacterCode =
  | "?"
  | "t"
  | "b"
  | "B"
  | "i"
  | "u"
  | "f"
  | "c"
  | "m"
  | "M"
  | "O"
  | "S"
  | "U"
  | "V";

/** A character describing the byteorder of the data. */
export type TypeByteOrder = "" | "<" | ">" | "|";

/** An integer providing the number of bytes the type uses. */
export type TypeByteUsed = "" | number;

/**
 * A string providing the basic type of the homogeneous array The basic string
 * format consists of 3 parts: a character describing the byteorder of the data
 * (`<`: little-endian, `>`: big-endian, `|`: not-relevant), a character code
 * giving the basic type of the array, and an integer providing the number of
 * bytes the type uses.
 */
export type TypeStr = `${TypeByteOrder}${TypeCharacterCode}${TypeByteUsed}`;
