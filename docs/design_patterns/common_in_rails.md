---
title: Common Design Patterns in Rails
---

**1. Service Objects**
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

**2. Decorator**
  - Commonly used with draper gem: https://github.com/drapergem/draper
  - Methods that are used on views, but present in Model can be moved to Decorator.
  - Presenter also does same.
  ```rb
  class ApplicationPresenter < SimpleDelegator

  end
  ````
  - https://ruby-doc.org/stdlib-2.5.1/libdoc/delegate/rdoc/SimpleDelegator.html

TODO: more design patterns