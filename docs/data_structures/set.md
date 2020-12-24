---
title: Set
---

TODO:

https://ruby-doc.org/stdlib-2.7.2/libdoc/set/rdoc/Set.html


```rb
require 'set'

s = Set.new         # <Set: {}>
s.add(0)            # <Set: {0}>
s.add(1)            # <Set: {0, 1}>
s.add(0)            # <Set: {0, 1}>
s.instance_of?(Set)

s.size # 2
```