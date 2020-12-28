---
title: Double Splat
---

- Captures all keyword arguments.
- And stores/returns them as a hash with key/value pair..
- For keyword paramters.

### Double splat when used with keyword paramters works perfectly:

```rb
def testing(a:, **b)
  p a
  p b
end

testing(a: "test", message: "this is a message")

# Output:
$ruby main.rb
"test"
{:message=>"this is a message"}
```


### Double splat when used with positional parameters errors out:
```rb
def testing(a, **b)
  p a
  p b
end

testing("test", "this is a message")

# Output:
$ruby main.rb
main.rb:1:in `testing': wrong number of arguments (given 2, expected 1) (ArgumentError)
	from main.rb:7:in `<main>'
```
