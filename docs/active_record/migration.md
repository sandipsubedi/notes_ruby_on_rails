---
title: Migration
---

TODO

- Rails runs each migration inside a transaction.
- If the migration fails, the transaction is rolled back.


### Time taken removing the index:
- User table has 1 Million rows:
- It was pretty fast. 3 Milliseconds for 1 million rows.

- Migration
```rb
class RemoveIndexFromUser < ActiveRecord::Migration[6.0]
  def up
    remove_index :users, name: :index_users_on_id
  end
end
```

- Output on console
```rb
== 20201229223838 RemoveIndexFromUser: migrating ===============================
-- remove_index(:users, {:name=>:index_users_on_id})
   -> 0.0367s
== 20201229223838 RemoveIndexFromUser: migrated (0.0368s) ======================
```

### Time taken adding the index:
- User table has 1 million rows:
- It's slow. 13 seconds for 1 million rows.
- Imagine what happens when you have 10/100 Million rows?
- This will lock that table for that long.

- Migration
```rb
class AddIndexOnUser < ActiveRecord::Migration[6.0]
  def up
    add_index :users, :id
  end
end

```

- Output on console
```rb
== 20201229223838 AddIndexToUser: migrating ===============================
-- add_index(:users, :id)
   -> 13.1013s
== 20201229223838 AddIndexToUser: migrated (13.1014s) =====================
```

Solution??