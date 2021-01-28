---
title: String
---

TODO

- Strings are mutable objects.

-  Each string in a Ruby program is its own object, with its own unique location in memory, even if the strings are identical.

- But if you reference the same **symbol** multiple times, you’re referencing the same object everywhere in your program, which means you’re referencing the same memory location.

### Compare 2 strings:
- Ruby will have to compare contents of strings, character by character.

### String as hash keys:
- Ruby will have to generate hash code character by character.
- But with symbol, Ruby can compare 2 symbols and generate their hashcode extremely quickly.
