---
title: Sort String
---

### Sort string

```rb
[15] pry(main)> temp = "hello world"
=> "hello world"
[16] pry(main)> temp.chars
=> ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
[17] pry(main)> temp.chars.sort.join
=> " dehllloorw"
```

### Sort string : reverse

```rb
[19] pry(main)> temp
=> "hello world"
[20] pry(main)> temp.chars.sort.reverse.join
=> "wroolllhed "
[21] pry(main)> temp.chars.sort.join.reverse
=> "wroolllhed "
```