[![Tests](https://github.com/tjosepo/deno_numpy/actions/workflows/tests.yml/badge.svg)](https://github.com/tjosepo/deno_numpy/actions/workflows/tests.yml)

# deno_numpy

Deno bindings for [Numpy](https://numpy.org/), the fundamental package for
scientific computing.

## Usage

Install Python, then:

```js
import np from "https://github.com/tjosepo/deno_numpy/raw/main/mod.ts";

function hillCipher(plaintext, key) {
  plaintext = np.array(plaintext);
  key = np.array(key);
  return plaintext.dot(key).mod(26).toList();
}

const cipher = hillCipher([0, 1, 2], [[1, 2, 3], [4, 5, 6], [11, 9, 8]]);
```

For more info, visit https://numpy.org/doc/stable/

## Other

Special thanks to DjDeveloper and Elias Sjögreen for creating
[deno_python](https://github.com/denosaurs/deno_python).
