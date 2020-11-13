# Constants in Ruby:


### How to create constants? (kinda)
```ruby
FRUIT = "orange"
```

- Anything that starts with uppercase is a constant in Ruby.

```ruby
Array
String
Hash
```
They are constants because the first letter is uppercase.



Constants can changes... but you will get an warning:
```ruby
ABC = 1
ABC = 2
```

```ruby
2: warning: already initialized constant ABC
```

There is no way to prevent a constant from changing because variables in Ruby are not containers, they are simply pointers to objects.

Or labels, if you prefer.

A constant doesn’t require any special symbol or syntax to declare. You just need to make the first letter an uppercase letter.

The following are valid constants:

ABC = 1
Goo = 2
Foo = 3

Notice that you can’t define constants inside a method.




When you define a class, what you’re really doing is creating a Class object, which is assigned to a constant.

The constant becomes the class name.

- no real constants in Ruby.


### Common Errors:
```ruby
puts Foo
# "uninitialized constant Foo (NameError)"
```
