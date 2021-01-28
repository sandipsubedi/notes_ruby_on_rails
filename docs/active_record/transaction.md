---
title: Transaction
---

- Use transaction blocks whenever you have a number of statements that must be executed together or not at all.
- Transactions are per-database connection, not per-mode.

### Transaction on ActiveRecord::Base
```rb
ActiveRecord::Base.transaction do
  # code...
end
```
### Transaction on Model
```rb
User.transaction do
  # code...
end
```

### Transaction on instance of Model
```rb
user = User.new
user.transaction do
  # code...
end
```

### save and destroy are automatically wrapped in a transaction

### Resources:
- https://api.rubyonrails.org/v6.1.0/classes/ActiveRecord/Transactions/ClassMethods.html
