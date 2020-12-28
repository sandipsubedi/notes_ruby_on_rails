---
title: SubString
---

### End Inclusive : 2 dots (..)

```rb
# End is inclusive: In Java end is exclusive
[1] pry(main)> "test"[0..1]
=> "te"
[2] pry(main)> "test"[0..4]
=> "test"
# Will not throw an error when it's out of index
[3] pry(main)> "test"[0..6]
=> "test"
```

### End Exclusive : 3 dots (...)

```rb
[7] pry(main)> "test"[0...1]
=> "t"
[8] pry(main)> "test"[0...4]
=> "test"
[9] pry(main)> "test"[0...6]
=> "test"
```