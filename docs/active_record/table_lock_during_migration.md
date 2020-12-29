---
title: Table Lock during migration
---

TODO

- index creation on a database table is a synchronous action that prevents INSERT, UPDATE, and DELETE operations until the full index is created


### Solutions?
1. Postgresql way:
- 


2. Rails Way:
- Adding: `:algorithm => :concurrently`


- Migration:
```rb
  def up
    add_index :users, :id, :algorithm => :concurrently
  end
```

- Output:
```rb
== 20201229223838 AddIndexOnUser: migrating ===============================
-- add_index(:users, :id, {:algorithm=>:concurrently})
rake aborted!
StandardError: An error has occurred, this and all later migrations canceled:

PG::ActiveSqlTransaction: ERROR:  CREATE INDEX CONCURRENTLY cannot run inside a transaction block
```

- Why error?
  - Because each migration is a transaction, and you can't run `concurrently` inside transaction.

- Solution?
  - `disable_ddl_transaction!`

- Migration
```rb
  disable_ddl_transaction!
  def up
    add_index :users, :id, :algorithm => :concurrently
  end
```

Output:

```rb
== 20201229223838 RemoveIndexFromJob: migrating ===============================
-- add_index(:users, :id, {:algorithm=>:concurrently})
   -> 13.2343s
== 20201229223838 RemoveIndexFromJob: migrated (13.2344s) =====================
```

- Interesting enough, it took about the same time.


Resources:
- Good article: https://semaphoreci.com/blog/2017/06/21/faster-rails-indexing-large-database-tables.html