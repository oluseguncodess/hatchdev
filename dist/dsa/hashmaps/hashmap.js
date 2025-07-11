"use strict";
class HashMapNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}
class HashMapp {
    constructor(size = 15) {
        this.size = size;
        this.buckets = Array(this.size).fill(null);
    }
    hashFn(key) {
        let KEY_STRING = String(key);
        let hash = 0;
        for (let i = 0; i < KEY_STRING.length; i++) {
            hash += KEY_STRING.charCodeAt(i);
        }
        return hash % this.size;
    }
    getIndex(key) {
        return this.hashFn(key);
    }
    set(key, value) {
        const index = this.hashFn(key);
        let head = this.buckets[index];
        let curr = head;
        while (curr) {
            if (curr.key === key) {
                curr.value = value;
                return;
            }
            curr = curr.next;
        }
        const newNode = new HashMapNode(key, value, head);
        this.buckets[index] = newNode;
    }
    get(key) {
        const index = this.hashFn(key);
        let curr = this.buckets[index];
        while (curr) {
            if (curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    }
    delete(key) {
        const index = this.hashFn(key);
        let curr = this.buckets[index];
        let prev = null;
        while (curr) {
            if (curr.key === key) {
                if (prev === null) {
                    this.buckets[index] = curr.next;
                    return;
                }
                else {
                    prev.next = curr.next;
                    return;
                }
            }
            prev = curr;
            curr = curr.next;
        }
        return undefined;
    }
    has(key) {
        const index = this.hashFn(key);
        let curr = this.buckets[index];
        while (curr) {
            if (curr.key === key) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}
const map = new HashMapp();
