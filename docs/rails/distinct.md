---
title: Distinct
---

### Mostly used with Select:
```ruby
Model.select(:rating).distinct
```

### If nothing is passed, id is used:
```ruby
[6] pry(main)> User.all.distinct.count
   (2.3ms)  SELECT COUNT(DISTINCT "users"."id") FROM "users"
=> 165
```

### While using with Pluck, it uses the items in the pluck to make it distinct.
- Single
```ruby
User.distinct.pluck(:name).count
   (0.9ms)  SELECT DISTINCT "users"."name" FROM "users"
=> 165
```

- Multiple
```ruby
User.distinct.pluck(:name, :shortname).count
(0.9ms)  SELECT DISTINCT "users"."name", "users"."shortname" FROM "users"
```
