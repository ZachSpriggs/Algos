// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack

class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }

    length(){
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        this.length++;
        this.top = newNode;
    }

    // remove from top
    pop() {
        if(this.isEmpty()){
            return null;
        }
        this.length--;
        var current = this.top;
        this.top = this.top.next;
        current.next = null;
    }

    // aka check top
    peek() {
        if(this.isEmpty()){
            return null;
        }
        console.log(this.top.data);
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    // length getter
    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    Object new_stack = new slStack();
    var count = 0;

    while(stack != isEmpty()){
        new_stack.push(stack.pop());
        count++;
    }
    while(new_stack != isEmpty()){
        stack.push(new_stack.pop());
    }
    console.log(count);
    return count;

};
