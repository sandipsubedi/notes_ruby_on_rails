---
title: Arrays
---

### Arrays can also be used for:
- Stack
- Queue
- LinkedList.

### %w
- %w string literal creates an Array of Strings if you supply words separated by whitespaces inside the brackets.
- Treats given string as inside single quotes.

```rb
40] pry(main)> %w[a b c d]
=> ["a", "b", "c", "d"

[44] pry(main)> %w[a b #{c} d]
=> ["a", "b", "\#{c}", "d"]
```

### %W
- treats all supplied words in the brackets as double-quoted Stringss

```rb
[43] pry(main)> c = 3
=> 3

[45] pry(main)> %W[a b c d]
=> ["a", "b", "c", "d"]

[47] pry(main)> %W[a b #{c} d]
=> ["a", "b", "3", "d"]
```

### Resources:
- https://ruby-doc.org/core-2.7.0/Array.html