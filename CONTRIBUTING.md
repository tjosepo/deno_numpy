# Contributing to deno_numpy

Welcome, and thank you for taking the time in contributing to deno_numpy!

## Development Setup

Clone this repo, then:
```
deno task test
```

## Philosophy

[deno_python](https://deno.land/x/python) makes it possible to import Python
libraries in Deno. However, using these libraries directly is not very
practical. Some types are not fully compatible between JavaScript and Python
and need to be converted manually, and Python libraries imported this way
completely lack type-validation. 

The goal of this project is to provide a TypeScript friendly interface to
NumPy.

Numpy's API is very large. Because of this, only a subset of features have been
completed. Visit https://numpy.org/doc/stable/reference/index.html to find what
is missing. This codebase attempts to copy the structure of the Numpy
documentation. 
