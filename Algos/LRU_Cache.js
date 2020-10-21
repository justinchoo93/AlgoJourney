/*
Implement a Least Recently Used Cache (LRU Cache)

LRU stands for Least Recently Used. 
In a nutshell, it is a cache eviction policy where we state that when our cache fills up and a new element comes in, we remove the Least Recently Used item from the cache.

size 5
cache -> 1 2 3 4 5
LRU 1
put (6, five)
cache -> 2 3 4 5 6
LRU 2
put (2, edward)
cache -> 2 3 4 5 6
LRU 3

Insertion of a new element in the LRU Cache should be done with time complexity of O(1). In other words, constant time.

Also, retrieval of an element from the Cache should be with time complexity of O(1).

When we retrieve an item from the Cache, it should become the most recently used item in the list. In other words, it should be on top of the list

*/

// Using Queue, Object -> this will result in O(n) get and put methods
class LRUcache1 {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.cache = {};
  }

  get(key) {
    // if no key exists in cache, return undefined
    if (!this.cache[key]) return undefined;
    // if a key is accessed, then it needs to be reassigned as the most recetly used (move they key to the end in queue);
    const keyIndex = this.queue.indexOf(key);
    this.queue.splice(keyIndex, 1);
    this.queue.push(key);
    return this.cache[key];
  }

  put(key, value) {
    // check if cache is full
    if (this.queue.length === this.size) {
      // remove LRU from queue and cache
      const removedKey = this.queue.shift();
      delete this.cache[removedKey];
    }
    // add new key with value to queue and cache
    this.queue.push(key);
    this.cache[key] = value;
  }
}

// Using Doubly Linked List, Object
class LRUCache2 {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = size;
    this.cache = {};
  }

  get(key) {}

  put(key, value) {
    let newNode;

    // if key does not exist in the cache
    if (!this.cache[key]) newNode = new Node(key, value);

    // if we have empty list
    if (!this.size) {
      // add new node to head and tail
      this.head = newNode;
      this.tail = newNode;

      // increment size
      this.size++;

      // assign newNode as value to key in cache
      this.cache[key] = newNode;
      return this;
    }

    // if cache is full
    if (this.size === this.maxSize) {
      // remove from cache
      delete this.cache[this.tail.key];

      // set new head
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }

    // add item to tail
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;

    // add to cache
    this.cache[key] = newNode;
    return this;
  }
}

// Doubly Linked List Node
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Using Map (Map preserves insertion order)
class LRUCache3 {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  get(key) {}

  put(key, value) {}
}
