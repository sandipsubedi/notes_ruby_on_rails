---
title: Print vs Puts vs P
---

1. Print:
- Doesn't move to the cursor to the new line.
- Same as `.print` in Java instead of `.println`

2. Puts:
- Creates a new line and moves the cursor to the new line.
- Same as `.prinln` in Java.

3. P:
- Displays the raw object.
- Even espace characters on a string is displayed.
- Helpful for debugging.

```rb
[12] pry(main)> print "test"
test=> nil
[10] pry(main)> puts "test \n"
test
=> nil
[11] pry(main)> p "test \n"
"test \n"
=> "test \n"
```


For more details:
https://www.rubyguides.com/2018/10/puts-vs-print/
