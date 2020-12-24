---
title: kwargs
---

- Basically a double splat.

```rb
[50] pry(main)> def hello(**kwargs)
[50] pry(main)*   puts kwargs
[50] pry(main)* end
=> :hello
[52] pry(main)> hello(first: "john", second: "doe")
{:first=>"john", :second=>"doe"}
=> nil
```