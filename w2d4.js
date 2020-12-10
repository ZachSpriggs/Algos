
// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    var tempStack = new Stack();
    var sorter = true;

    while(!stack.isEmpty()){
        var temp = stack.pop();
        if(tempStack.isEmpty() || tempStack.peek().data <= temp){
            tempStack.push(temp)
        } else {
            sorted = false;
            tempStack.push(temp);
            break;
        }
    }
    while(!tempStack.isEmpty()){
        stack.push(tempStack.pop());
    }
    return sorted;
}




// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
    return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue){
    let newQueue = new Queue();
    let sum = 0;

    while(!queue.isEmpty()){
        let node = queue.dequeue();
        sum += node.data;
        newQueue.enqueue(node);
    }
    while(!newQueue.isEmpty()){
        queue.enqueue(newQueue.dequeue());
    }
    return sum;
}



function isPalindrome(queue) {
    var palindrome = true;
    var stack = new Stack();
    var len = queue.length();

    for(var i = 0; i < len; i++){
        var node = queue.dequeue();
        stack.push(new Node(node.data));
        queue.enqueue(node);
    }

    for(var i = 0; i < len; i++){
        var dequeued = queue.dequeue();
        var popped = stack.pop();

        if(popped.data !== dequeued.data){
            palindrome = false;
        }
        queue.enqueue(dequeued);
    }
    return palindrome;
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

let myOtherQueue = new Queue();
myOtherQueue.enqueue(1);
myOtherQueue.enqueue(40);
myOtherQueue.enqueue(3);
myOtherQueue.enqueue(2);
myOtherQueue.enqueue(1);

console.log(isPalindrome(myQueue)); // true
console.log(isPalindrome(myOtherQueue)); // false




class Queue {
    constructor() {
        this.front = null; // "front of the line"
        this.rear = null; // "back of the line"
        this.length = 0;
    }

    // add to the rear
    enqueue(node){
        node = this.rear;
        if(this.isEmpty()){
            this.rear = node;
            this.front = node;
        }
        else{
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }

    // remove from the front
    dequeue(){
        if(this.isEmpty()){
            return null;
        } else {
            temp = this.front.next;
            this.front.next = null;
            this.front = temp;
            this.length--;
        }
    }

    // check the front of the queue
    checkFront(){
        if(this.isEmpty()){
            return;
        } else {
            return this.front.data;
        }
    }

    // return if empty
    isEmpty(){
        if(this.length === 0){
            return true;
        } else {
            return false;
        }
    }

    // return length
    length(){
        return this.length;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
function readQueue(queue){
    var tempQueue = new Queue();
    while(!queue.isEmpty()){
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }
    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue());
    }
    return queue;
}

function readQueue2(queue){
    var length = queue.length();
    while(length){
        var node = queue.dequeue();
        console.log(node.data);
        queue.enqueue(node);
        length--;
    }
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

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
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

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
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop()); h
    }

    return count;
};
