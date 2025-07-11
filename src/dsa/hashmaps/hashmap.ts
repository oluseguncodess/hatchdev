class HashMapNode<K, V> {
    key: K
    value: V
    next: HashMapNode<K, V> | null

    constructor(key: K, value: V, next: HashMapNode<K, V> | null) {
        this.key = key
        this.value = value
        this.next = next
    }
}

class HashMapp<K, V> {
    private buckets: Array<HashMapNode<K, V> | null>
    private size: number

    constructor(size: number = 15) {
        this.size = size
        this.buckets = Array(this.size).fill(null)
    }

    private hashFn(key: K) {
        // Turn key into a string
        let KEY_STRING = String(key)
        let hash = 0;
        for (let i = 0; i < KEY_STRING.length; i++) {
            hash += KEY_STRING.charCodeAt(i);
        }
        return hash % this.size;
    }

    private getIndex(key: K): number {
        return this.hashFn(key)
    }

    set(key: K, value: V): void {
        // get the index
        const index = this.hashFn(key)

        // make the node in the array a head node for easy traversal and insertion
        let head = this.buckets[index]

        // store it in a curr variable
        let curr = head

        while (curr) {
            // check if key if found
            if (curr.key === key) {
                curr.value = value
                return
            }
            curr = curr.next
        }

        // else if head is null, create a new node 
        const newNode = new HashMapNode(key, value, head)

        // set the new node as the head
        this.buckets[index] = newNode
    }

    get(key: K): V | undefined {
        // get the index from the hash function
        const index = this.hashFn(key);

        // access the first node in the array
        let curr = this.buckets[index];

        while (curr) {
            if (curr.key === key) {
                return curr.value
            }
            curr = curr.next
        }

        // if not found
        return undefined;
    }

    delete(key: K): undefined {
        // get index
        const index = this.hashFn(key)

        // save the head property 
        let curr = this.buckets[index]
        let prev: HashMapNode<K, V> | null = null

        while (curr) {
            if (curr.key === key) {
                if (prev === null) {
                    this.buckets[index] = curr.next
                    return;
                } else {
                    prev.next = curr.next
                    return;
                }
            }
            prev = curr
            curr = curr.next
        }
        return undefined
    }

    has(key: K): boolean {
        // get index 
        const index = this.hashFn(key)

        let curr = this.buckets[index]

        while (curr) {
            if (curr.key === key) {
                return true
            }
            curr = curr.next
        }

        // not found
        return false;
    }
}

const map = new HashMapp<string, number>()
// console.log(map.hashFn('banana'))