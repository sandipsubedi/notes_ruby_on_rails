---
title: Yield
---

- Passed block when method is called. Which will be executed with `yield`

```ruby
def make_momo
    puts "---This is start"
    yield
    puts yield
    puts "This is End---"
end

make_momo { puts "Make momo with Tofu" }
```

Output:

```ruby
$ruby main.rb
---This is start
Make momo with Tofu
Make momo with Tofu

This is End---
```