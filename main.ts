import np from "https://deno.land/x/numpy@0.2.0/mod.ts";

const x = np.arange(15, { dtype: np.int64 }).reshape(3, 5);
np.put(x, np.arange(5, 15, 2), -99);
console.log(x);
// array([[  0   1   2   3   4]
// [-99   6 -99   8 -99]
// [ 10 -99  12 -99  14]])

console.log(x.max({ axis: 1 }));
// array([ 4  8 14])