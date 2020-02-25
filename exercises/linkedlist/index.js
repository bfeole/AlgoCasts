// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    // Insert First Method
    insertFirst(data) {
        // create a new Node, set the next value to this.head pointing the new node to the previous head
        // If there is no head value it will be set to null
        this.head = new Node(data, this.head);
    }
    // Size Method - return number/int of nodes in a LL
    size() {
        let counter = 0;
        // reference the first node in LL
        let node = this.head;
        // if LL has no head, checks if node is true.
        // if no node fails and does not execute
        // if exists, enters while loop
        // found one node, increment counter by 1
        // update position to next node until node returns false(node = null)
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
}



// Example:
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
