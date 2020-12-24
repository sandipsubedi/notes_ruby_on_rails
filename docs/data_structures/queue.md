---
title: Queue
---

TODO:
https://ruby-doc.org/core-2.5.0/Queue.html

```rb
queue = Queue.new
queue << 2
# push 2 => queue = [2]

queue << 3
# push 3 => queue = [2, 3] (just a representation, it will be an object though)

queue.pop # pop 2
```