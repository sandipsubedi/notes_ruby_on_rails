---
title: Ruby Documentation in Command Line
---

**Check Ruby Version Manager, if `rvm` is not already installed**

### To generate
```rb
rvm docs generate
```

### To use:
- Type `ri` on the terminal
- And type the method name

```rb
➜  Test git:(test_branch) ✗ ri

Enter the method name you want to look up.
You can use tab to autocomplete.
Enter a blank line to exit.
>>
```

### Output when typed
```
= .uniq

(from ruby site)
=== Implementation from Array
------------------------------------------------------------------------
  ary.uniq                -> new_ary
  ary.uniq {|item| ...}   -> new_ary

------------------------------------------------------------------------

Returns a new array by removing duplicate values in self.

If a block is given, it will use the return value of the block for
comparison.

It compares values using their #hash and #eql? methods for efficiency.

:
```