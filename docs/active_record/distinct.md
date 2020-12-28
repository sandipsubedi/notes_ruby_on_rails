---
title: Distinct
---

### Mostly used with Select:
```rb
Model.select(:rating).distinct


User.select(:name).distinct
SELECT DISTINCT "users"."name" FROM "users"
```

### If nothing is passed, id is used:
```rb
[6] pry(main)> User.all.distinct.count
   (2.3ms)  SELECT COUNT(DISTINCT "users"."id") FROM "users"
=> 165
```

### While using with Pluck, it uses the items in the pluck to make it distinct.
- Single
```rb
User.distinct.pluck(:name).count
   (0.9ms)  SELECT DISTINCT "users"."name" FROM "users"
=> 165
```

- Multiple
```rb
User.distinct.pluck(:name, :shortname).count
(0.9ms)  SELECT DISTINCT "users"."name", "users"."shortname" FROM "users"
```
