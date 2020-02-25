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
}



// Example:
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
