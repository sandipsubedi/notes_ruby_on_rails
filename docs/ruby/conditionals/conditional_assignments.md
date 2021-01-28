---
title: Conditional Assignment
---

TODO

### Without a block

- if @data is nil then only calls database.data

```rb
@data ||= database.data
```

### With a block
```rb
@data ||= begin
  users = User.all
  sorted = users.order(:name)
  sorted.top(10)
end
```
