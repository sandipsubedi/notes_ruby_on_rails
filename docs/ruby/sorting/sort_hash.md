---
title: Sort Hash
---

### Sort hash by key using `.sort` 

- `.sort` changes hash to array, so need to put `.to_h` at the end.
- sorts by key.

```rb
[22] pry(main)> values = { "two": 2, "three": 3, "one": 1 }
=> {:two=>2, :three=>3, :one=>1}
[23] pry(main)> values.sort.to_h
=> {:one=>1, :three=>3, :two=>2}
```

### Sort hash by value in ascending order using `.sort_by`

```rb
[25] pry(main)> values
=> {:two=>2, :three=>3, :one=>1}
[26] pry(main)> values.sort_by{|k,v| v}
=> [[:one, 1], [:two, 2], [:three, 3]]
[43] pry(main)> values.sort_by{|k,v| v }.to_h
=> {:one=>1, :two=>2, :three=>3}
```

### Sort hash by value in descending order using `.sort_by`

```rb
[29] pry(main)> values
=> {:two=>2, :three=>3, :one=>1}
[30] pry(main)> values.sort_by{|k,v| -v}
=> [[:three, 3], [:two, 2], [:one, 1]]
[44] pry(main)> values.sort_by{|k,v| -v }.to_h
=> {:three=>3, :two=>2, :one=>1}
```

### Sort hash by key in ascending order using `.sory_by`

```rb
[46] pry(main)> values
=> {:two=>2, :three=>3, :one=>1}
[47] pry(main)> values.sort_by{|k,v| k }.to_h
=> {:one=>1, :three=>3, :two=>2}
```