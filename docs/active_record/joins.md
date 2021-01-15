---
title: Joins
---

TODO

- What does it do? it Joins

### Joins

- Join returns only the rows that have matching values in both the tables

```rb
User.joins(:posts)
# SELECT "users".*
# FROM "users"
# INNER JOIN "posts" ON "posts"."user_id" = "users"."id"
```


Multiple joins:
```rb
User.joins(:posts, :account)
# SELECT "users".*
# FROM "users"
# INNER JOIN "posts" ON "posts"."user_id" = "users"."id"
# INNER JOIN "accounts" ON "accounts"."id" = "users"."account_id"
```

### LetOuterJoins || left_joins (Alias)
- Returns all the rows from the LEFT table and matching records between both the tables.
