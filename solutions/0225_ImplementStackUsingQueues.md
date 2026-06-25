# 0225. Implement Stack using Queues

**Difficulty:** Easy
**Tags:** `Stack` `Design` `Queue`
**Date:** 2026-06-25
**Link:** [LeetCode](https://leetcode.com/problems/implement-stack-using-queues/)

---

## Problem Summary

> Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

**Example:**
```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

**Constraints:**
- 1 <= x <= 9
- At most 100 calls will be made to push, pop, top, and empty.
- All the calls to pop and top are valid.

---

## Approach

**Strategy:** *(e.g., Sliding Window / BFS / Dynamic Programming / Two Pointers)*

Key observations:
-
-

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(?) | O(?) |
| **Approach 2** | O(?) | O(?) |

---

## Solution (Java)

```java
typedef struct {
    int* data;
    size_t front;
    size_t end;
    size_t size;
    size_t capacity;
} MyStack;

int deque(MyStack *queue){
    int value = queue->data[queue->front];
    queue->front = (queue->front + 1) % queue->capacity; // Move front pointer
    queue->size--;                                       // Decrease size
    return value; // Return the removed element
}

static void enqueue(MyStack *queue, int value){
    if(queue->size == queue->capacity){
        size_t newCap = queue -> capacity * 2;
        int *n = malloc(sizeof(int) * newCap);
        for (int i=0; i<queue->size; i++){
            n[i] = queue -> data[(queue->front+i) % queue->capacity];
        }
        free(queue->data);
        queue->data = n;
        queue->front = 0;
        queue->end = queue->size;
        queue->capacity = newCap;
    }
    queue->data[queue->end] = value;
    queue->end = (queue->end + 1) % queue->capacity; // Move end pointer
    queue->size++;  
}


MyStack* myStackCreate() {
    MyStack *obj = malloc(sizeof(MyStack));
    obj -> capacity = 4;
    obj -> data = malloc(sizeof(int)* obj->capacity);
    obj -> front = 0;
    obj -> end = 0;
    obj -> size = 0;
    return obj;
}

void myStackPush(MyStack* obj, int x) {
    enqueue(obj, x);
    for (int i=0; i< obj->size-1; i++){
        enqueue(obj, deque(obj));
    }
}

bool myStackEmpty(MyStack* obj) {
    return obj->size == 0;
}

int myStackPop(MyStack* obj) {
    if(myStackEmpty(obj)){
        return -1;
    }
    return deque(obj);
}

int myStackTop(MyStack* obj) {
    if (myStackEmpty(obj)){
        return -1;
    }
    return obj->data[obj->front];
}



void myStackFree(MyStack* obj) {
    if (obj != NULL){
        free(obj->data);
        free(obj);
    }
}

/**
 * Your MyStack struct will be instantiated and called as such:
 * MyStack* obj = myStackCreate();
 * myStackPush(obj, x);
 
 * int param_2 = myStackPop(obj);
 
 * int param_3 = myStackTop(obj);
 
 * bool param_4 = myStackEmpty(obj);
 
 * myStackFree(obj);
*/
```


