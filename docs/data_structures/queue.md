---
title: Queue
---

- First In, First Out (FIFO)

### Create a Queue:
```rb
[35] pry(main)> queue = Queue.new
=> #<Thread::Queue:0x00007f9d968bb0b0>
```

### Adding items to the Queue:
```rb
[40] pry(main)> queue << 1
=> #<Thread::Queue:0x00007f9d968bb0b0>

[41] pry(main)> queue << 2
=> #<Thread::Queue:0x00007f9d968bb0b0>
```

### Size of the Queue:
```rb
[42] pry(main)> queue.size
=> 2
```

### Deleting items from the Queue:

- Deletes the item and returns the item.

```rb
57] pry(main)> queue.size
=> 3

[58] pry(main)> queue.pop
=> "first"

[59] pry(main)> queue.size
=> 2
```

### Java Peek Equivalent.
- Doesn't seem like there is one.
- Implementing Queue in an array is another approach.

### Delete all items from the Queue
```
[60] pry(main)> queue.clear
=> #<Thread::Queue:0x00007f9d96aa0498>

[62] pry(main)> queue.size
=> 0
```

### Check if Queue is empty:
```rb
[75] pry(main)> queue.empty?
=> true
```

### Also see:
Sized Queue

### Resources:
- https://ruby-doc.org/core-2.5.0/Queue.html