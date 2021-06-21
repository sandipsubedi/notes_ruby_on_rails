---
title: Private Method
---


#### Both subclass and superclass can call each others private methods:

- SAME rule for protected.

```rb
class Animal
    
    def test
        sub_private
    end
    
  private

  def eat
    p "I eat."
  end
end

class Tiger < Animal
    def hello
        p "hello"
        eat
    end
    
    private
    
    def sub_private
        p "I am sub private"
    end
end


tiger = Tiger.new
tiger.test

tiger.hello

```