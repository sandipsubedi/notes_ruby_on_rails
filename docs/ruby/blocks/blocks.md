---
title: Blocks
---

- one or more lines of code that you put inside the do and end keywords.
- or { and } for inline blocks.
- We can pass one or more variables into the block.

```rb
do
  puts "this is a test"
end
```

- But block doesn't run by itself.
- We need to attach it with something.

### Multi-line
```rb
# n ==> Block parameter.
[0, 1, 2, 3, 4].each do |n|
  puts "Number #{n}"
end
```

### Single-line with do-end
```rb
[0, 1, 2, 3, 4].each do |n| puts "Number #{n}" end
```

### Single-line with { }
```rb
# Single line with { }
[0, 1, 2, 3, 4].each  { |n| puts "Number #{n}"  }
```

- If we look above, `do` and `end` is literally replaced with `{` and `}`.
