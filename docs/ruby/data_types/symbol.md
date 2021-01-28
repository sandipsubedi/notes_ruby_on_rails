---
title: Symbol
---

TODO

- Symbols are labels or identifiers.
- Symbols are cheaper than strings (in terms of computer memory.)
- If you use a word over and over in your program, use a symbol.
- Rather than having thousands of copies of that word in memory, the computer will store the symbol only once.

### Symbols will have same object id:

```rb
[158] pry(main)> :hello
=> :hello
[159] pry(main)> :hello.object_id
=> 2384988

[160] pry(main)> :hello
=> :hello
[161] pry(main)> :hello.object_id
=> 2384988
```

### Changing String to Symbol Ruby:
```rb
pry(main)> "test".to_sym
=> :test
```

### Changing Symbol to String Ruby:
```rb
[39] pry(main)> :test.to_s
=> "test"
```
