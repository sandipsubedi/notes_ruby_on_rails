---
title: Stack
---

- Stack is like stacking plates in your Kitchen.
- Last in, first out: LIFO
- In Ruby, you can treat an array as stack because there is `push` and `pop` methods.
- But what about `peek`? Java has peek, what about Ruby?
- You can use `.last` instead of peek. And it will return the item on the top.
- `.length` or `.size` will return the size of the Stack.

```rb
stack = []
stack << 1 # push 1 => stack = [1]
stack << 2 # push 2 => stack = [1, 2]
stack.pop  # pop => 2, stack = [1]
```

### push
- There are many ways to push items on a stack in Ruby:

```rb
[88] pry(main)> stack
=> [1, 2, 3]

[89] pry(main)> stack.push(4)
=> [1, 2, 3, 4]

[90] pry(main)> stack.push 5
=> [1, 2, 3, 4, 5]

[91] pry(main)> stack << 6
=> [1, 2, 3, 4, 5, 6]

[92] pry(main)> stack
=> [1, 2, 3, 4, 5, 6]
```

### pop
- Removes an item from the top, and returns that item
```rb
[74] pry(main)> stack
=> [1, 2, 3]

[75] pry(main)> stack.pop
=> 3

[76] pry(main)> stack
=> [1, 2]
```

### last ( instead of peek )
```rb
[79] pry(main)> stack
=> [1, 2, 3]

[80] pry(main)> stack.last
=> 3
```

### size/length/count
- Size, count, length returns the same result.
- Check the article on size, count and length to learn more about their differences.

```rb
[84] pry(main)> stack
=> [1, 2, 3]

[85] pry(main)> stack.size
=> 3

[86] pry(main)> stack.count
=> 3

[87] pry(main)> stack.length
=> 3
```

### Related LeetCode problem:
- https://leetcode.com/problems/valid-parentheses/