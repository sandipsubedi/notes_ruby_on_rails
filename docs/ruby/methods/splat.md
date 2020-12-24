---
title: Splat
---

### Single Splat vs Double Splat:

Great article:
https://medium.com/@sologoubalex/parameter-with-splat-operator-in-ruby-part-1-2-a1c2176215a5


### Single Splat:
- Captures all regular arguments.
- For positional paramters.
- Returns an array of values.

### Single splat when used with positions parameters works perfectly:
```rb
def testing(a, *b)
  p a
  p b
end

testing("test", "this is a message", "this is second message")

# Output:
$ruby main.rb
"test"
["this is a message", "this is second message"]
```


### Single splat when used with keyword parameters errors out:

```rb
def testing(a:, *b)
  p a
  p b
end

testing(a: "test", message: "this is a message")

# output:
$ruby main.rb
main.rb:1: syntax error, unexpected *
def testing(a:, *b)
                 ^
main.rb:4: syntax error, unexpected keyword_end, expecting end-of-input
```

### Double Splat:
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
