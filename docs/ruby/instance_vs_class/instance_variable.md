# Instance variable (@apple)
- To store shared data that all the methods(in the same class) can use.
- An instance variable is not visible outside the object it is in;
- but when you create an attr_accessor, it creates an instance variable and also makes it visible (and editable) outside the object

https://stackoverflow.com/questions/12924080/difference-between-instance-variable-and-attr-accessor

```ruby
class MyClass
  def initialize
    @greeting = "hello"
  end
end

m = MyClass.new
m.greeting #results in the following error:
  #NoMethodError: undefined method `greeting' for #<MyClass:0x007f9e5109c058 @greeting="hello">
```

```ruby
class MyClass
  attr_accessor :greeting

  def initialize
    @greeting = "hello"
  end
end

m2 = MyClass.new
m2.greeting = "bonjour" # <-- set the @greeting variable from outside the object
m2.greeting #=> "bonjour"   <-- didn't blow up as attr_accessor makes the variable accessible from outside the object
```