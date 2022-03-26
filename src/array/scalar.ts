import np from "../shared/numpy.ts";
import { Scalar } from "../shared/types.d.ts";

/** Signed integer type, compatible with C `char`. */
export const int8: Scalar = np.int8;

/** Signed integer type, compatible with C `short`. */
export const int16: Scalar = np.int16;

/** Signed integer type, compatible with C `int`. */
export const int32: Scalar = np.int32;
