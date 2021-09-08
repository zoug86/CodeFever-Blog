---
title: 'Singly LinekdLists'
date: 'June 1, 2021'
excerpt: 'Single LinkedList in JavaScript & Python!'
cover_image: '/images/posts/img16.png'
category: 'Data Structure'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# Singly Linked Lists

A linked list is A data structure that contains a **head**, **tail** and **length** property. In general, Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or just points to null. Unlike arrays, Linked Lists do not support random data access and they do not have indecies. Instead, they are connected via nodes with a **next** pointer.

## 0- Initialize a new Singly Linked List

**JavaScript**

```javascript:
class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
}
class SinglyLinkedList{
  constructor(){
     this.head = null;
     this.tail = null;
     this.length = 0;
  }
}

```

**Python**

```python:
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
class SinglyLinkedList:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

```
## 1- Adding (pushing) a new node to the end of the Linked List

**JavaScript**

```javascript:
push(val){
    let newNode = new Node(val);
    if(! this.head){
       this.head = newNode;
       this.tail = this.head;
    } else{
       this.tail.next = newNode;
       this.tail = newNode;
    }
    this.length++;
    return this;
  }

```

**Python**

```python:
def push(self, val):
    new_node = Node(val)
    if not self.head:
        self.head = new_node
        self.tail = self.head
    else:
        self.tail.next = new_node
        self.tail = new_node
    self.length += 1
    return self

```
## 2- Adding (unshifting) a node to the beginning of the Linked List

**JavaScript**

```javascript:
 unshift(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else{
        let currentHead = this.head;
        newNode.next = currentHead;
        this.head = newNode; 
    }
    this.length++;
    return this;
  }

```

**Python**

```python:
def unshift(self, val):
    new_node = Node(val)
    if not self.head:
        self.head = new_node
    else:
        new_node.next = self.head
        self.head = new_node
    self.length += 1
    return self

```
## 3- Inserting a node at a specific position

**JavaScript**

```javascript:
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

```

**Python**

```python:
def insert(self, index, val):
    if index < 0 or index > self.length:
        return "undefined"
    if index == self.length:
        return not not self.push(val)
    if index == 0:
        return not not self.unshift(val)
    new_node = Node(val)
    previous = self.get(index - 1)
    temp = previous.next
    previous.next = new_node
    new_node.next = temp
    self.length += 1
    return True

```
## 4- Removing (popping) a node from the end of the Linked List

**JavaScript**

```javascript:
pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
}

```

**Python**

```python:
def pop(self):
    if not self.head:
        return "undefined"
    current = self.head
    new_tail = current
    while current.next:
        new_tail = current
        current = current.next
    self.tail = new_tail
    self.tail.next = None
    self.length -= 1
    return current

```
## 5- Removing (shifting) a node from the beginning of the Linked List

**JavaScript**

```javascript:
shift(){
    if(!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return current;
}

```

**Python**

```python:
def shift(self):
    if not self.head:
        return "undefined"
    current_head = self.head
    self.head = current_head.next
    self.length -= 1
    return current_head

```


