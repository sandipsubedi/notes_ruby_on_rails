---
title: Module Nesting
---


### Nesting with module with double colons (::)
```rb
# Module User must be defined beforehand.
module User
end

class User::Admin
    p Module.nesting
end

# Output:
$ruby main.rb
[User::Admin]
```

- If Module User is not defined beforehand, we get an error:

```rb
class User::Admin
    p Module.nesting
end

# Output:
$ruby main.rb
main.rb:4:in `<main>': uninitialized constant User (NameError)
```


### Nesting with module without double colons (::)

```rb
module User
    class Admin
        p Module.nesting
    end
end

# Output:
$ruby main.rb
[User::Admin, User]
```