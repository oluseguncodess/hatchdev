"use strict";
class Nodez {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor(initialValue) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (initialValue !== undefined) {
            const newNode = new Nodez(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
    append(val) {
        const newNode = new Nodez(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.value;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return removedNode.value;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removedNode.value;
    }
    prepend(value) {
        if (this.length === 0) {
            return this.append(value);
        }
        const newNode = new Nodez(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index) {
        var _a, _b;
        if (this.length === 0 || index < 0 || index >= this.length)
            return undefined;
        if (index === this.length - 1)
            return (_a = this.tail) !== null && _a !== void 0 ? _a : undefined;
        if (index === 0)
            return (_b = this.head) !== null && _b !== void 0 ? _b : undefined;
        if (index < this.length / 2) {
            let current = this.head;
            let counter = 0;
            while (counter < index) {
                current = current.next;
                counter++;
            }
            return current !== null && current !== void 0 ? current : undefined;
        }
        else {
            let current = this.tail;
            let counter = this.length - 1;
            while (counter > index) {
                current = current.prev;
                counter--;
            }
            return current !== null && current !== void 0 ? current : undefined;
        }
    }
    print() {
        if (!this.head)
            return undefined;
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.value} <-> `;
            current = current.next;
        }
        return result.slice(0, -5);
    }
    insertAt(index, value) {
        const newNode = new Nodez(value);
        if (index < 0 || index > this.length)
            return undefined;
        if (index === this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this;
    }
    removeAtIndex(index) {
        if (index < 0 || index >= this.length || this.length === 0)
            return undefined;
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        const nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        return removedNode.value;
    }
    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        while (current) {
            let next = current.next;
            current.next = current.prev;
            current.prev = next;
            current = next;
        }
        return this;
    }
}
const list = new DoublyLinkedList(5);
list.append(6).append(7).append(8).append(9);
list.prepend(4);
list.prepend(3);
list.append(11);
list.insertAt(7, 10);
list.insertAt(0, 2);
list.insertAt(list.length, 12);
list.reverse();
console.log(list.print());
