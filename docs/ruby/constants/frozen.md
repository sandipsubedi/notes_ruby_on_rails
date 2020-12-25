---
title: Frozen
---

### To check if sometthing is frozen:

```rb
[93] pry(main)> name = "John"
=> "John"
[94] pry(main)> name.frozen?
=> false
[95] pry(main)> name.freeze
=> "John"
[96] pry(main)> name.frozen?
=> true
```