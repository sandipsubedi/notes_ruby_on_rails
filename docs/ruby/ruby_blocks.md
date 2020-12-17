# Ruby Blocks:

- one or more lines of code that you put inside the do and end keywords.
- or { and } for inline blocks.


```ruby
# Multi Line:
# n ==> Block parameter.
[0, 1, 2, 3, 4].each do |n|
puts "Number #{n}"
end

[0, 1, 2, 3, 4].each do |n| puts "Number #{n}" end
# Single line with { }
[0, 1, 2, 3, 4].each  { |n| puts "Number #{n}"  }
```

- If we look above, `do` and `end` is literally replaced with `{` and `}`.