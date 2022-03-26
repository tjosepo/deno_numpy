import { kwargs } from "../shared/util.ts";
import np from "../shared/numpy.ts";
import { DataType } from "../shared/types.d.ts";

/**
 * Create a data type object.
 *
 * A numpy array is homogeneous, and contains elements described by a dtype
 * object. A dtype object can be constructed from different combinations of
 * fundamental numeric types.
 */
function initDtype(
  type: DataType,
  options?: {
    /** Add padding to the fields to match what a C compiler would output for a similar C-struct. Can be `true` only if obj is a dictionary or a comma-separated string. If a struct dtype is being created, this also sets a sticky alignment flag `isalignedstruct`. */
    align?: boolean;
    /** Make a new copy of the data-type object. If `false`, the result may just be a reference to a built-in data-type object. */
    copy?: boolean;
  },
): dtype {
  return new dtype(np.dtype(type, ...kwargs(options)));
}

export { initDtype as dtype };

export default class dtype {
  constructor(public dtype: any) {}

  /** A character code (one of ‘biufcmMOSUV’) identifying the general kind of data. */
  get kind(): "b" | "i" | "u" | "f" | "c" | "m" | "M" | "O" | "S" | "U" | "V" {
    return this.dtype.kind.valueOf();
  }

  /** A character indicating the byte-order of this data-type object. */
  get byteorder(): "=" | "<" | ">" | "|" {
    return this.dtype.byteorder.valueOf();
  }
}
