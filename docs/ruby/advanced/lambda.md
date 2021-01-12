---
title: Lambda
--- 

TODO

- Lambda on ApplicationRecord models



### Basic lambda creation and calling example:

```rb
[31] pry(main)> print_lambda = lambda { puts "hello world" }
=> #<Proc:0x00007f9d96908ab8@(pry):39 (lambda)>

[32] pry(main)> print_lambda.call
hello world
```

### Creating lambda with -> 

```rb 
[33] pry(main)> print_lambda = -> { puts "hello world" }
=> #<Proc:0x00007f9d969dfce8@(pry):41 (lambda)>

[34] pry(main)> print_lambda.call
hello world
```

### Lambda with parameters
```rb
temp_lambda = lambda { |first_param, second_param| puts "#{first_param} - #{second_param}" }

temp_lambda.call(1, 2)

# Output:

$ruby main.rb
1 - 2
```