---
title: Design Patterns
---

- a guide for writing well-designed code.
- We like to categorize and find patterns in everything, and software is no exception to that.
- This is how design patterns started to develop.
- A design pattern will show you the way to the solution but it won’t give you a piece of code.


### Common Design Patterns in Rails:
1. Service Objects
  - Location: `app/services`
  - Structure
  ```rb
    class YourService < BaseService
      def initialize()
      end

      def call
        # method body
      end

      private
    end
  ```
2. Decorator
  - Commonly used with draper gem: https://github.com/drapergem/draper
  - Methods that are used on views, but present in Model can be moved to Decorator.
  - Presenter also does same.
  ```rb
  class ApplicationPresenter < SimpleDelegator

  end
  ````
  - https://ruby-doc.org/stdlib-2.5.1/libdoc/delegate/rdoc/SimpleDelegator.html

3. What about Job?
4. What about Active Record callbacks?


### Resources:
1. Great article:
  https://blog.appsignal.com/2020/08/05/introduction-to-ruby-on-rails-patterns-and-anti-patterns.html
