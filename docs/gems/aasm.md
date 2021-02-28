---
title: aasm
---

State Machine for Ruby classes.

TODO:
https://github.com/aasm/aasm

### Class created:
```rb
class StateMachine
  include AASM

  aasm do
    state :sleeping, initial: true
    state :running, :cleaning

    event :run do
      transitions from: :sleeping, to: :running
    end

    event :clean do
      transitions from: :running, to: :cleaning
    end

    event :sleep do
      transitions from: [:running, :cleaning], to: :sleeping
    end
  end
end
```

### Running `may` commands in the beginning.
```rb
2.6.4 :002 > machine = StateMachine.new
 => #<StateMachine:0x00007fedf0531908>
2.6.4 :003 > machine.sleeping?
 => true
2.6.4 :004 > machine.may_run?
 => true
2.6.4 :005 > machine.may_clean?
 => false
2.6.4 :006 > machine.may_sleep?
 => false
```

### Moving to a different state:
```rb
2.6.4 :007 > machine.run
 => true
```

### Checking current state:
```rb
2.6.4 :014 > machine.aasm.current_state
 => :running
2.6.4 :015 > machine.aasm.current_event
 => :run
 2.6.4 :021 > machine.running?
 => true
2.6.4 :022 > machine.cleaning?
 => false
2.6.4 :023 > machine.sleeping?
 => false
```

### May commands:
- May run the one already running.
```rb
2.6.4 :028 > machine.aasm.current_state
 => :running
2.6.4 :026 > machine.may_run?
# False because we can't go from running to running.
 => false
```

```rb
2.6.4 :031 > machine.aasm.current_state
 => :running
2.6.4 :032 > machine.may_sleep?
# true because we have a flow from running to sleeping
 => true
```

### Error when not possible:
```rb
2.6.4 :034 > machine.run
Traceback (most recent call last):
        1: from (irb):34
AASM::InvalidTransition (Event 'run' cannot transition from 'cleaning'.)
```
