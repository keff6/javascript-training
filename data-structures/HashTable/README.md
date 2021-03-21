# Hash Table

## Description
Are data structures used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are FAST for all of the following operations:
  - Finding values
  - Adding new values
  - Removing values

A good Hash is:
  - Fast (constant time)
  - Doesn't cluster outputs at specific indices, but distributes uniformly
  - Deterministic (same input yields same output)

Strategies to manage collisions:
  + Separate Chaining
      Nested data structure in position [[[],[]]]
  + Linear probing
      when we find a collision we search through the array to find the next empty slot.



## Methods

## Big O

* Insertion - O(1)
* Removal - O(1)
* Access - O(1)


