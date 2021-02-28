---
title: Group
---

### Example:
```rb
irb> Order.group(:status).count
=> {"being_packed"=>7, "shipped"=>12}
```


### Resources:
- https://guides.rubyonrails.org/active_record_querying.html#group