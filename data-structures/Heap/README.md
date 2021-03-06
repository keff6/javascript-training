# Binary Heap

## Description

Very similar to a BST but with some different rules.
Are used to implement Priority Queues, which are very commonly used data structures.
THey are also used quite a bit, with graph traversal algorithms.

Notice that it is storead as an array in wich to find childs you have to go to index:
left = 2n + 1
right = 2n + 2

same way to know who an item parent is we go to floored value of:
(n-1)/2

### MaxBinaryHeap
Parent nodes are always larger than child nodes.

### MinBinaryHeap
Parent nodes are always smaller than child nodes.


Real life example:
```
HTML DOM
Network routing
Abstract syntax trees
AI (Artificial Intelligence)
Folders in Operating Systems
JSON
```

## Methods

## Big O

* Insertion - O(log n)
* Removal - O(log n)