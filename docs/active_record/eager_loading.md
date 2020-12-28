---
title: Eager Loading
---

TODO

- Loading everything upfront, buy using `includes`.

### Strict loading mode in rails 6.1:
https://blog.saeloun.com/2020/02/25/rails-strict-loading-mode-to-fix-n-1.html

```rb
users = User.includes(:friends)
```

### Pros
- Everything is ready to go.

### Cons
- Use up space/memory.